import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Slide data: update URLs as needed
const slides = [
  {
    id: "slide1",
    imageUrl:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
    title: "CREATING A WORLD",
    subtitle: "WHERE EVERY CHILD HAS THE OPPORTUNITY TO SUCCEED",
  },
  {
    id: "slide2",
    imageUrl:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    title: "EMPOWERING COMMUNITIES",
    subtitle: "BUILDING SUSTAINABLE FUTURES",
  },
  {
    id: "slide3",
    imageUrl:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
    title: "HEALTHCARE FOR ALL",
    subtitle: "BRINGING MEDICAL SERVICES TO REMOTE AREAS",
  },
];

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction < 0 ? 100 : -100,
  }),
};

const HeroSection = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(([prev]) => [(prev + 1) % slides.length, 1]);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { imageUrl, title, subtitle } = slides[index];

  return (
    <section className="relative w-full h-[75vh] overflow-hidden">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={slides[index].id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 via-blue-600/60 to-transparent z-10" />

          {/* Text & CTAs */}
          <div className="relative z-20 max-w-4xl mx-2 mt-12 px-4 py-20 text-center lg:text-left lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white max-w-xl">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <Link
                to="/donate"
                className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full transition"
              >
                DONATE
                <span className="ml-3 p-2 border-2 border-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 11l3-3m0 0l3 3m-3-3v8"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;

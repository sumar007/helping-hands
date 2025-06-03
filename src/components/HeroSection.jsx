import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1950&q=80",
    title: "Dignity Above All",
    description: "Serving the underprivileged with critical medical care.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1950&q=80",
    title: "Building Hope Together",
    description: "Empowering communities through sustainable projects.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",
    title: "Clean Water for All",
    description: "Bringing safe drinking water to remote villages.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1950&q=80",
    title: "Educating Young Minds",
    description: "Providing quality education where it’s needed most.",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1950&q=80",
    title: "Healthcare Access",
    description: "Mobile clinics reaching the farthest corners.",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const slideIntervalRef = useRef(null);

  // Auto‐advance every 5 seconds
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [current]);

  const startAutoPlay = () => {
    stopAutoPlay();
    slideIntervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section className="relative w-full h-[55vh] md:h-[60vh] lg:h-[65vh] overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          {/* Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="mt-4 text-sm md:text-base lg:text-lg text-white drop-shadow-md max-w-2xl">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-[-10px] left-0 right-0 flex justify-center items-center space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all ${
              idx === current
                ? "bg-white ring-2 ring-yellow-400"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;

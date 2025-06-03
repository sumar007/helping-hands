// src/components/AboutSection.jsx
import React, { useState, useEffect, useRef } from "react";

const aboutImages = [
    "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
];

const AboutSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideIntervalRef = useRef(null);

    // Auto‐advance every 4 seconds
    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSlide]);

    const startAutoPlay = () => {
        stopAutoPlay();
        slideIntervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
        }, 4000);
    };

    const stopAutoPlay = () => {
        if (slideIntervalRef.current) {
            clearInterval(slideIntervalRef.current);
        }
    };

    const goToSlide = (idx) => {
        setCurrentSlide(idx);
    };

    return (
        <section className="w-full h-[550px] px-4 py-2 md:px-8 lg:px-16 bg-white rounded-lg shadow-md">
            {/* Heading */}
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    About Lillah Services
                </h2>
                <div className="mt-2 w-20 h-1 bg-yellow-500 mx-auto rounded"></div>
            </div>

            {/* Two‐column layout: text on left, slider on right */}
            <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-8">
                {/* Left Column: Text + Button */}
                <div className="md:w-1/2 space-y-4 text-gray-700">
                    <p>
                        Lillah Services is committed to serving and bringing dignity, health
                        and hope to underprivileged individuals and families. Our teams
                        conduct due diligence on each and every case to prevent fraud by
                        personally:
                    </p>

                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Validating the financial situation of potential recipients.</li>
                        <li>
                            Speaking with doctors, hospitals, pharmacies and schools to assess
                            treatment cost to ensure the best treatment at the lowest cost.
                        </li>
                        <li>Only paying the service provider directly.</li>
                    </ol>

                    <p>Your support makes all of this possible!</p>

                    <button className="mt-4 inline-block bg-gray-800 text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-gray-900 transition">
                        READ MORE
                    </button>
                </div>

                {/* Right Column: Image Slider */}
                <div className="md:w-1/2 w-full relative h-64 md:h-80 lg:h-96">
                    {/* Slide Images */}
                    {aboutImages.map((url, idx) => (
                        <div
                            key={idx}
                            className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
                                }`}
                        >
                            <img
                                src={url}
                                alt={`About slide ${idx + 1}`}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    ))}

                    {/* Dots Navigation */}
                    <div className="absolute bottom-[-40px] left-0 right-0 flex justify-center space-x-2">
                        {aboutImages.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all ${idx === currentSlide
                                        ? "bg-yellow-500 ring-2 ring-gray-800"
                                        : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;

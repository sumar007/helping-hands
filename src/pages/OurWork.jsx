import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Heart, GraduationCap, Stethoscope } from 'lucide-react';

const OurWork = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const workData = [
        {
            id: 1,
            title: "Basic Needs",
            icon: <Heart className="w-8 h-8" />,
            description: "No one should sleep hungry, yet millions struggle without basic nutrition. We provide emergency and on-going food rations to the elderly, orphanages, widows and patients unable to work. We also run food drives for Ramadan.",
            image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop",
            color: "from-orange-500 to-red-500"
        },
        {
            id: 2,
            title: "Critical Medical Care",
            icon: <Stethoscope className="w-8 h-8" />,
            description: "We serve individuals who do not receive government assistance or have families that can't afford to provide for treatment. In many cases, recipients are way below the poverty line and have to make trade offs that have long term impact and even mortal consequences.",
            image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",
            color: "from-blue-500 to-purple-500"
        },
        {
            id: 3,
            title: "Education",
            icon: <GraduationCap className="w-8 h-8" />,
            description: "Education is key to fighting poverty. In many impoverished communities, access to education is not within reach and far too often, parents have to choose to pay school fees or feed the family. When you make a gift to our education programs, you give a child hope for a brighter future.",
            image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
            color: "from-green-500 to-teal-500"
        }
    ];

    // Auto-slide effect
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % workData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPlaying, workData.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % workData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + workData.length) % workData.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const toggleAutoPlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-2 rounded-full">
                            Lillah Services, Inc. - 501(c)(3) Nonprofit (Tax ID# 86-2695057)
                        </span>
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Work</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Making a difference in communities through comprehensive support and care
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                    {/* Slide Content */}
                    <div className="relative h-[600px] overflow-hidden">
                        {workData.map((item, index) => (
                            <div
                                key={item.id}
                                className={`absolute inset-0 transition-transform duration-700 ease-in-out ${index === currentSlide ? 'translate-x-0' :
                                        index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                                    }`}
                            >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10`} />

                                {/* Content Grid */}
                                <div className="grid md:grid-cols-2 h-full">
                                    {/* Text Content */}
                                    <div className="flex flex-col justify-center p-12 lg:p-16">
                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} text-white mb-6`}>
                                            {item.icon}
                                        </div>

                                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                            {item.title}
                                        </h2>

                                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                            {item.description}
                                        </p>

                                        <div className="flex items-center space-x-4">
                                            <button className={`px-8 py-3 bg-gradient-to-r ${item.color} text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200`}>
                                                Learn More
                                            </button>
                                            <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                                                Donate Now
                                            </button>
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-20`} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 group"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 group"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
                    </button>

                    {/* Auto-play Control */}
                    <button
                        onClick={toggleAutoPlay}
                        className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200"
                    >
                        <Play className={`w-4 h-4 text-gray-700 ${isPlaying ? 'opacity-100' : 'opacity-50'}`} />
                    </button>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center items-center mt-8 space-x-3">
                    {workData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'bg-blue-600 scale-125'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-6 max-w-md mx-auto">
                    <div className="w-full bg-gray-200 rounded-full h-1">
                        <div
                            className="bg-blue-600 h-1 rounded-full transition-all duration-300"
                            style={{ width: `${((currentSlide + 1) / workData.length) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                        <div className="text-3xl font-bold text-orange-600 mb-2">10,000+</div>
                        <div className="text-gray-600">Meals Provided</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                        <div className="text-gray-600">Medical Cases Supported</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                        <div className="text-3xl font-bold text-green-600 mb-2">250+</div>
                        <div className="text-gray-600">Students Educated</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWork;
import React, { useState, useEffect } from 'react';
import { Target, Eye, Lock, Shield, Users, Heart } from 'lucide-react';

const AboutUs = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Image slider data
    const sliderImages = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
            alt: "Communit helping hands"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
            alt: "Medical care assistance"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
            alt: "Education support"
        },
        {
            id: 4,
            url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop",
            alt: "Food assistance program"
        }
    ];

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [sliderImages.length]);

    const values = [
        {
            title: "Access",
            icon: <Heart className="w-6 h-6" />,
            description: "We believe that everyone should have access to critical medical care, free or affordable education and no one should sleep hungry.",
            color: "from-red-500 to-pink-500"
        },
        {
            title: "Dignity",
            icon: <Users className="w-6 h-6" />,
            description: "We strive to ensure dignity for everyone that Lillah Services supports. We will never commercialize their situation and only use their information for the purposes of fundraising and never without their consent.",
            color: "from-blue-500 to-indigo-500"
        },
        {
            title: "Transparency",
            icon: <Eye className="w-6 h-6" />,
            description: "We maintain transparency for every single transaction that comes through Lillah Services. Our donors expect that their donations are directed properly in the most efficient manner and we are committed to keeping their trust.",
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Trustees",
            icon: <Shield className="w-6 h-6" />,
            description: "We have a moral obligation to manage and carry out acts of kindness, compassion and humanity. We will do this to the best of our abilities and seek assistance from our communities to further this.",
            color: "from-purple-500 to-violet-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-8 lg:py-16">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left Side - Image Slider */}
                    <div className="relative">
                        <div className="relative h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                            {sliderImages.map((image, index) => (
                                <div
                                    key={image.id}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <img
                                        src={image.url}
                                        alt={image.alt}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                </div>
                            ))}

                            {/* Slide Indicators */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {sliderImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                                                ? 'bg-white scale-125'
                                                : 'bg-white/50 hover:bg-white/75'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                About Lillah Services
                            </h1>
                            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6" />
                        </div>

                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p className="text-sm bg-blue-50 text-blue-800 px-4 py-2 rounded-lg inline-block">
                                Lillah Services, Inc. is recognized by the IRS as a not for profit 501c3 charitable organization. Your donation to Lillah Services is tax deductible to the extent permitted by law.
                            </p>

                            <p className="text-sm text-gray-500">
                                Lillah Services Inc tax identification number is 86-2695057
                            </p>
                        </div>

                        {/* Mission and Vision */}
                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl border border-orange-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center mr-3">
                                        <Target className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-orange-800">Our Mission</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Serving the underprivileged with critical medical care, access to education and providing food insecurity assistance so that everyone can live full and dignified lives.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-100">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-xl flex items-center justify-center mr-3">
                                        <Eye className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-purple-800">Our Vision</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Equality and Access for All.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-100 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                        {value.icon}
                                        <span className="text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
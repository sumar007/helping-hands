import React, { useState } from "react";
import FundraiserCard from "../components/SportlightCards";

// Dummy data
const activeFundraisers = Array.from({ length: 12 }, (_, i) => ({
    title: `EidulAdha Goat ${i + 1}`,
    description: "Share the blessings of Qurbani with those who need it the most...",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",

    goal: 2000,
    raised: 0,
    isCompleted: false,
}));

const completedFundraisers = Array.from({ length: 10 }, (_, i) => ({
    title: `Support Project ${i + 1}`,
    description: "Donation target met. Please donate for more impact...",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop",

    goal: 900,
    raised: 980,
    isCompleted: true,
}));

const Spotlight = () => {
    const [activeTab, setActiveTab] = useState("active");

    const fundraisers =
        activeTab === "active" ? activeFundraisers : completedFundraisers;

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold text-center mb-6">
                Fundraiser Spotlights
            </h1>

            <div className="flex justify-center mb-6">
                <button
                    onClick={() => setActiveTab("active")}
                    className={`px-4 py-2 font-semibold border-b-2 ${activeTab === "active" ? "border-yellow-500 text-yellow-500" : "text-gray-500"
                        }`}
                >
                    Active
                </button>
                <button
                    onClick={() => setActiveTab("completed")}
                    className={`ml-6 px-4 py-2 font-semibold border-b-2 ${activeTab === "completed" ? "border-yellow-500 text-yellow-500" : "text-gray-500"
                        }`}
                >
                    Completed
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {fundraisers.map((item, index) => (
                    <FundraiserCard key={index} fundraiser={item} />
                ))}
            </div>
        </div>
    );
};

export default Spotlight;

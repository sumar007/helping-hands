// src/components/FundraiserSpotlights.jsx
import React from "react";

/**
 * Sample data for each fundraiser. 
 * You can replace these sample objects with data from your CMS/API.
 */
const FUNDRAISERS = [
    {
        id: "pakistan-eid",
        title: "Pakistan EidUlAdha $170 goat",
        imageUrl:
            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",
        raised: 0,
        goal: 170, // Because each goat is $170
        link: "/spotlight-detail?recordId=pakistan-eid",
    },
    {
        id: "nigeria-eid",
        title: "Nigeria EidUlAdha $180 goat",
        imageUrl:
            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",
        raised: 0,
        goal: 180,
        link: "/spotlight-detail?recordId=nigeria-eid",
    },
    {
        id: "india-eid",
        title: "India EidUlAdha (Goal met)",
        imageUrl:
            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",
        raised: 2100,
        goal: 2100,
        link: "/spotlight-detail?recordId=india-eid",
    },
    {
        id: "sindh-wheelchairs",
        title: "Closed Wheelchair Sindh Pakistan",
        imageUrl:
            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",
        raised: 1500,
        goal: 1500,
        link: "/spotlight-detail?recordId=sindh-wheelchairs",
    },
    {
        id: "pakistan-medical",
        title: "Medical Camp Pakistan",
        imageUrl:
            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",
        raised: 1200,
        goal: 3000,
        link: "/spotlight-detail?recordId=pakistan-medical",
    },
    {
        id: "uganda-food",
        title: "Food Relief Uganda",
        imageUrl:
            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",
        raised: 750,
        goal: 2000,
        link: "/spotlight-detail?recordId=uganda-food",
    },
    {
        id: "sindh-wheelchairs",
        title: "Closed Wheelchair Sindh Pakistan",
        imageUrl:
            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",
        raised: 1500,
        goal: 1500,
        link: "/spotlight-detail?recordId=sindh-wheelchairs",
    },
    {
        id: "pakistan-medical",
        title: "Medical Camp Pakistan",
        imageUrl:
            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",
        raised: 1200,
        goal: 3000,
        link: "/spotlight-detail?recordId=pakistan-medical",
    },
];


/**
 * A single card representing one fundraiser.
 * It calculates “percentRaised” and displays a progress bar.
 */
const FundraiserCard = ({ title, imageUrl, raised, goal, link }) => {
    // Calculate a percentage (0–100). If raised > goal, cap at 100%.
    const percentRaised = Math.min(Math.round((raised / goal) * 100), 100);

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
            {/* Image at the top */}
            <div className="w-full h-44 md:h-48 lg:h-52 xl:h-56 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover rounded-t-lg"
                />
            </div>

            {/* Card body */}
            <div className="p-4 flex flex-col justify-between h-48">
                {/* Title (clickable) */}
                <a
                    href={link}
                    className="text‐base md:text‐lg font-semibold text-gray-800 hover:text-blue-700 mb-2 block line-clamp-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {title}
                </a>

                {/* Progress bar container */}
                <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className={`h-2.5 rounded-full ${percentRaised === 100 ? "bg-green-600" : "bg-yellow-500"
                                }`}
                            style={{ width: `${percentRaised}%` }}
                        ></div>
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                        {/* If goal is met, show “Goal met!”. Otherwise show percentage. */}
                        {percentRaised === 100
                            ? "Goal met!"
                            : `${percentRaised}% funded`}
                    </div>
                </div>

                {/* Amount raised text */}
                <div className="mt-4 text-sm text-gray-700 font-medium">
                    ${raised.toLocaleString()} raised
                </div>
            </div>
        </div>
    );
};

/**
 * The main component that renders a grid of FundraiserCard components.
 */
const FundraiserSpotlights = () => {
    return (
        <section className="w-full px-4 py-8 md:px-8 lg:px-16 bg-gray-50">
            {/* Section heading */}
            <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Fundraiser Spotlights
                </h2>
                <div className="mt-2 w-20 h-1 bg-yellow-500 mx-auto rounded"></div>
            </div>

            {/* Grid of cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {FUNDRAISERS.map((fundraiser) => (
                    <FundraiserCard
                        key={fundraiser.id}
                        title={fundraiser.title}
                        imageUrl={fundraiser.imageUrl}
                        raised={fundraiser.raised}
                        goal={fundraiser.goal}
                        link={fundraiser.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default FundraiserSpotlights;

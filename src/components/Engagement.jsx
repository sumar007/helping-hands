import React from "react";

const engagementData = [
    {
        title: "Case Workers & Med Professionals",
        description: "Join our team and give back to humanity",
        img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",
    },
    {
        title: "Monetary Donation",
        description: "Simple and quick...",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Corporate Match Donation",
        description: "Many corporations will match your donation.",
        img: "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1950&q=80",
    },
    {
        title: "Partnerships",
        description:
            "Companies you shop from will donate a percentage of sales to Lillah Services.",
        img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1950&q=80",

    },
];

const EngagementSection = () => {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                    Engagement
                </h2>
                <div className="mt-2 mb-4 flex justify-center">
                    <div className="w-12 h-1 bg-yellow-400 rounded-full"></div>
                </div>
                <p className="text-xl font-semibold text-yellow-600 mb-10">
                    Many ways to support
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {engagementData.map((item, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="rounded-xl w-full object-cover h-48 shadow-md"
                            />
                            <h3 className="mt-4 text-lg font-semibold text-yellow-600">
                                {item.title}
                            </h3>
                            <p className="mt-1 text-gray-600 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EngagementSection;

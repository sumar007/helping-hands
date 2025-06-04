import React from "react";

const impactData = [
    {
        title: "Basic Needs",
        img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",

    },
    {
        title: "Critical Medical Care",
        img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",
    },
    {
        title: "Education",
        img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1950&q=80",

    },
];

const ImpactSection = () => {
    return (
        <section className="bg-[#fdf3d1] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                    Make an Impact
                </h2>
                <div className="mt-2 mb-10 flex justify-center">
                    <div className="w-12 h-1 bg-yellow-400 rounded-full"></div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {impactData.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="rounded-[30px] w-full object-cover max-h-64 shadow-md"
                            />
                            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-800">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;

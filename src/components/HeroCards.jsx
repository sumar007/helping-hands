import React from "react";
import { useNavigate } from "react-router-dom";
import HeroCarousel from "./HeroSection";

const cards = [
    {
        id: "school",
        title: "School at Home",
        description:
            "‘School at Home’ No Internet No Smartphone, Free Education 24/7 for Persons with Disabilities.",
        imgUrl:
            "https://www.helpinghandindiango.org/wp-content/uploads/2021/09/Shoolathome-rightwindow-1.jpg",
    },
    {
        id: "old-age-home",
        title: "Sainath Dada Dadi’s Old Age Home",
        description:
            "Our Old Age Home is for neglected destitute elderly persons—senior citizens, widows & more.",
        imgUrl:
            "https://www.helpinghandindiango.org/wp-content/uploads/2021/09/forSaiNatholdage.jpg",
    },
    {
        id: "disability-center",
        title: "Narayan Disability Home & Training Center",
        description:
            "Multiple Trainings for Persons with Disabilities: call center, mombatti making, computer skills.",
        imgUrl:
            "https://www.helpinghandindiango.org/wp-content/uploads/2021/09/Narayan-Home-750x510.jpg",
    },
    {
        id: "medical-camp",
        title: "Medical Camp for Dental, Eye & Blood Donation",
        description:
            "Blood donation is a noble cause and we help you organize a successful camp.",
        imgUrl:
            "https://www.helpinghandindiango.org/wp-content/uploads/2017/05/4-4-750x510.jpg",
    },
];

const HeroWithCards = () => {
    const navigate = useNavigate();

    return (
        <section className="px-4 py-2">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left: Slider */}
                <div className="lg:w-2/3 ">
                    <HeroCarousel />
                </div>

                {/* Right: Cards */}
                <div className="lg:w-1/3 flex flex-col space-y-3">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            onClick={() => navigate(`/details/${card.id}`)}
                            className="flex bg-white rounded-lg shadow overflow-hidden h-[128px] hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                        >
                            <img
                                src={card.imgUrl}
                                alt={card.title}
                                className="w-1/3 object-cover"
                            />

                            <div className="w-2/3 p-2 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-sm font-semibold">{card.title}</h3>
                                    <p className="text-sm text-gray-600">
                                        {card.description}
                                    </p>
                                </div>
                                <button
                                    onClick={() => navigate(`/details/${card.id}`)}
                                    className="mt-1 text-xs font-medium text-yellow-500 hover:underline self-start"
                                >
                                    READ MORE &rarr;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroWithCards;

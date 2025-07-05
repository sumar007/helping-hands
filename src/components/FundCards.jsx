import React from "react";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    id: "the-issue",
    title: "THE ISSUE",
    description:
      "For so many children and youth in poverty, childhood can be incredibly difficult.",
    imgUrl:
      "https://www.equalopp.org/sites/default/files/styles/page_teaser/public/node/basic-page/teaser/IMG_0210.JPG?itok=XWVnPv9R",
    link: "/the-issue",
    buttonText: "Learn More",
  },
  {
    id: "our-work",
    title: "OUR WORK",
    description:
      "One in four children lives in poverty. We're working hard every day to change that.",
    imgUrl: "https://www.equalopp.org/sites/default/files/styles/page_teaser/public/node/basic-page/teaser/Kenya_Wholefoods_0.jpg?itok=CPGrYieP",
    link: "/our-work",
    buttonText: "Here's How",
  },
  {
    id: "our-impact",
    title: "OUR IMPACT",
    description:
      "We've worked with over 250,000 children and mobilized 10,000 volunteers to take action.",
    imgUrl:
      "https://www.helpinghandindiango.org/wp-content/uploads/2021/09/forSaiNatholdage.jpg",
    link: "/our-impact",
    buttonText: "Read On",
  },
];

const SimpleSpotlight = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <div
              className="h-48 w-full cursor-pointer"
              onClick={() => navigate(card.link)}
            >
              <img
                src={card.imgUrl}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-800">
                {card.title}
              </h3>
              <p className="mt-4 text-gray-600 flex-grow">
                {card.description}
              </p>
              <button
                onClick={() => navigate(card.link)}
                className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full self-start transition"
              >
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimpleSpotlight;

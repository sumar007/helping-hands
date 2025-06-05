import React from "react";

const FundraiserCard = ({ fundraiser }) => {
  const {
    title,
    description,
    image,
    goal,
    raised,
    isCompleted,
  } = fundraiser;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-3">{description}</p>

        <div className="bg-gray-100 p-3 rounded-xl flex justify-between mb-3">
          <div>
            <p className="text-xs text-gray-500">Fundraiser goal</p>
            <p className="text-red-600 font-bold">${goal}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Raised Amount</p>
            <p className="text-green-600 font-bold">${raised}</p>
          </div>
        </div>

        {isCompleted ? (
          <span className="bg-green-600 text-white px-4 py-2 rounded-full text-xs text-center w-[100px] mx-auto">
            COMPLETED
          </span>
        ) : (
          <div className="flex justify-center space-x-2 mt-4">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm">
              DONATE
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm">
              SHARE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FundraiserCard;

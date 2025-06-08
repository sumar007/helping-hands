import React from "react";
import { useLocation } from "react-router-dom";

const EngagementDetail = () => {
  const { state } = useLocation();
  if (!state) return <div className="text-center p-10">No data found for this activity.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{state.title}</h2>
      <img
        src={state.img}
        alt={state.title}
        className="w-full h-80 object-cover rounded-lg shadow-lg mb-4"
      />
      <p className="text-gray-700 text-lg">{state.description}</p>
    </div>
  );
};

export default EngagementDetail;

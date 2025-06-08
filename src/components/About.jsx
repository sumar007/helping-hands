// src/components/VideoSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const videos = [
  "https://www.youtube.com/embed/pv2vZl2lOCg",
  "https://www.youtube.com/embed/7WnZ1Ev3JgA",
  "https://www.youtube.com/embed/AD-3bdZ0xR8",
  "https://www.youtube.com/embed/d03XcS1HkMg",
];

const VideoSection = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:px-8 lg:px-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Helping & Spreading Awareness
        </h2>
        <div className="mt-2 w-20 h-1 bg-yellow-500 mx-auto rounded"></div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {videos.map((url, idx) => (
          <div
            key={idx}
            className="w-full aspect-video border-4 border-black rounded-md overflow-hidden"
          >
            <iframe
              className="w-full h-full"
              src={url}
              title={`video-${idx}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/videos")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded shadow font-semibold transition"
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default VideoSection;

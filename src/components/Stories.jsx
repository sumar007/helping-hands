import React from "react";
import { useNavigate } from "react-router-dom";

const story = {
  imgUrl: "https://www.equalopp.org/sites/default/files/node/storie/Demarcus%20Demetrius%20and%20Kiara.png",
  title: "OUR STORIES",
  text: `Since its onset in March 2011, the Syrian civil war has grown into a devastating
humanitarian crisis, irreparably damaging the lives of millions of youth across the region.
Like three million other child refugees, Sayed lost both his home and family to the horrors of war.
Left with only the clothes on his back and nowhere to turn, he was reduced to living in a makeshift
shelter composed of garbage bags. Without food or water, he travelled for days, following the
crowds of people through the blistering desert heat in an effort to survive.`,
};

export default function StoriesSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-red-500 text-white py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left: Image */}
        <div className="w-full lg:w-1/3">
          <img
            src={story.imgUrl}
            alt={story.title}
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{story.title}</h2>
          <p className="leading-relaxed whitespace-pre-wrap">{story.text}</p>
          <button
            onClick={() => navigate("/stories")}
            className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full transition"
          >
            VIEW ALL STORIES
          </button>
        </div>
      </div>
    </section>
  );
}

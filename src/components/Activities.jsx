// src/components/OutstandingActivities.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const activities = [
  {
    id: 1,
    title: "Winter Clothing Drive",
    description: "Distributing warm clothes to the homeless in January.",
    category: "BLOOD DONATION",
    img: "https://www.helpinghandindiango.org/wp-content/uploads/2021/10/IMG_20160102_084501.jpg",
  },
  {
    id: 2,
    title: "Old Age Home Chess Day",
    description: "A fun chess tournament for our senior residents.",
    category: "OLD AGE HOME",
    img: "https://www.helpinghandindiango.org/wp-content/uploads/2021/09/oldage.jpg",
  },
  {
    id: 3,
    title: "Mega Blood Donation Camp",
    description: "Over 200 units collected in our annual camp.",
    category: "BLOOD DONATION",
    img: "https://www.helpinghandindiango.org/wp-content/uploads/2021/09/13.jpg",
  },
  {
    id: 4,
    title: "Tech Skill Workshop",
    description: "Computer fundamentals training for youth.",
    category: "SKILL TRAINING",
    img: "https://www.helpinghandindiango.org/wp-content/uploads/2021/09/techi.jpg",
  },
  {
    id: 5,
    title: "Surya Nagar Blood Drive",
    description: "Community drive held at Surya Nagar grounds.",
    category: "BLOOD DONATION",
    img: "https://www.helpinghandindiango.org/wp-content/uploads/2021/09/13.jpg",
  },
  {
    id: 6,
    title: "Senior Tech Day",
    description: "Teaching smartphone basics to elderly friends.",
    category: "OLD AGE HOME",
    img: "https://www.helpinghandindiango.org/wp-content/uploads/2021/09/oldage.jpg",
  },
  {
    id: 7,
    title: "Coding for All",
    description: "Intro to HTML/CSS for underprivileged youth.",
    category: "SKILL TRAINING",
    img: "https://www.helpinghandindiango.org/wp-content/uploads/2021/09/techi.jpg",
  },
];

export default function OutstandingActivities() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("ALL");

  const filteredActivities =
    filter === "ALL"
      ? activities
      : activities.filter((a) => a.category === filter);

  const pageSize = 3;
  const pages = Math.ceil(filteredActivities.length / pageSize);
  const [page, setPage] = useState(0);

  const handleFilter = (cat) => {
    setFilter(cat);
    setPage(0);
  };

  const handleNav = (act) => {
    navigate(`/portfolio/${act.id}`, { state: act });
  };

  return (
    <section className="bg-white mb-4">
      <div className="text-center max-w-5xl mx-auto">
        <p className="text-yellow-500 font-semibold mb-2 uppercase tracking-wide">
          Joining Hands To Help The World
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Some Outstanding Activities
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["ALL", "BLOOD DONATION", "OLD AGE HOME", "SKILL TRAINING"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-4 py-2 rounded-full border transition duration-200 ${
                  filter === cat
                    ? "bg-yellow-500 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-yellow-100"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* Activity Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredActivities
            .slice(page * pageSize, (page + 1) * pageSize)
            .map((act) => (
              <div
                key={act.id}
                onClick={() => handleNav(act)}
                className="cursor-pointer bg-gray-50 hover:bg-white p-4 rounded-xl shadow-md transition hover:shadow-lg"
              >
                <img
                  src={act.img}
                  alt={act.title}
                  className="rounded-lg h-56 w-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-yellow-600">
                  {act.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{act.description}</p>
              </div>
            ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {Array.from({ length: pages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx)}
              className={`w-4 h-2 rounded-full transition-all duration-200 ${
                page === idx
                  ? "bg-yellow-500"
                  : "bg-yellow-200 hover:bg-yellow-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

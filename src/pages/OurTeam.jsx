import React from "react";

// Dummy team members data
const members = [
  {
    name: "Ms. Komal",
    title: "Board President & Trustee",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    description: "As women, we must stand up for ourselves, each other, and our community with courage and solidarity."
  },
  {
    name: "Mr. Anil Kumar",
    title: "General Secretary & Trustee",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "A skilled organizer with 16+ years of strategy and IT experience, dedicated to transparent governance."
  },
  {
    name: "Ms. Neelu",
    title: "Treasurer & Trustee",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    description: "Neelu is a finance professional with strong leadership skills, serving as Treasurer since May 2015."
  },
  {
    name: "Lt. Sital Dass",
    title: "Senior Adviser",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    description: "A dedicated freedom fighter whose legacy guides our social services and humanitarian work."
  },
  {
    name: "Ms. Komal",
    title: "Board President & Trustee",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    description: "As women, we must stand up for ourselves, each other, and our community with courage and solidarity."
  },
  {
    name: "Mr. Anil Kumar",
    title: "General Secretary & Trustee",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "A skilled organizer with 16+ years of strategy and IT experience, dedicated to transparent governance."
  },
  {
    name: "Ms. Neelu",
    title: "Treasurer & Trustee",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    description: "Neelu is a finance professional with strong leadership skills, serving as Treasurer since May 2015."
  },
  {
    name: "Ms. Komal",
    title: "Board President & Trustee",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    description: "As women, we must stand up for ourselves, each other, and our community with courage and solidarity."
  },
  {
    name: "Mr. Anil Kumar",
    title: "General Secretary & Trustee",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "A skilled organizer with 16+ years of strategy and IT experience, dedicated to transparent governance."
  },
  {
    name: "Ms. Neelu",
    title: "Treasurer & Trustee",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    description: "Neelu is a finance professional with strong leadership skills, serving as Treasurer since May 2015."
  },
];

const OurTeam = () => {
  const heroBgUrl = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80";

  return (
    <section className="relative">
      {/* Hero Section */}
      <div
        className="w-full h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBgUrl})` }}
      >
        <div className=" bg-opacity-50 p-6  text-center max-w-2xl">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Our Team
          </h1>
          <p className="mt-2 text-sm md:text-lg text-gray-200">
            Meet the dedicated individuals driving our mission and making a difference every day.
          </p>
        </div>
      </div>

      {/* Intro Text */}
      <div className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            BOARD MEMBERS
          </h2>
          <p className="text-gray-700">
            Helping Hand India NGO is managed by a Board of Trustees and Advisors comprising individuals’ expertise from diverse backgrounds. Members of the board meet quarterly and serve a one-year term.
          </p>
        </div>
      </div>

      {/* Members Grid */}
      <div className="py-8 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1 text-center">
                    {member.name}
                  </h3>
                  <p className="text-sm italic text-gray-600 mb-4 text-center">
                    {member.title}
                  </p>
                  <p className="text-sm text-gray-700 flex-1">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

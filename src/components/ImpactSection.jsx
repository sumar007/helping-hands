import React from "react";
import {
  FaTshirt,
  FaHandHoldingHeart,
  FaUserFriends,
  FaBriefcaseMedical,
} from "react-icons/fa";

const helpData = [
  {
    title: "Food & Clothes",
    description:
      "You can help us by providing food materials and clothes for poor childrens and disabled people.",
    icon: <FaTshirt size={40} />,
  },
  {
    title: "Donation",
    description:
      "Your small donation and love will be helpful for supporting quality education and food for people in need.",
    icon: <FaHandHoldingHeart size={40} />,
  },
  {
    title: "Volunteer & Internship",
    description:
      "We appreciate supporters who are passionate about improving the lives of children, women and old age people.",
    icon: <FaUserFriends size={40} />,
  },
  {
    title: "Medical support camps",
    description:
      "We are always here to help you to organize a successful blood donation camp & happy to support this noble cause.",
    icon: <FaBriefcaseMedical size={40} />,
  },
];

const ImpactSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-16 px-4"
      style={{
        backgroundImage: `url('https://www.helpinghandindiango.org/wp-content/uploads/2021/10/how-to-help-2.jpg')`, // Replace with your actual background image path
        backgroundColor: "#00336699",
      }}
    >
      <div className="max-w-7xl mx-auto text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">How To Help?</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {helpData.map((item, index) => (
            <div
              key={index}
              className="group p-6 border border-yellow-400 bg-[#00000055] rounded-lg backdrop-blur-sm transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4 text-yellow-400 transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

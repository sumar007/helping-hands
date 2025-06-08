// src/components/SimpleSpotlight.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const SimpleSpotlight = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
       <div className="mb-8 border bg-green-500 rounded-full shadow-md w-11/12 sm:w-3/4 md:w-1/2 mx-auto px-4 py-2">
  <h2 className="text-center text-sm sm:text-lg md:text-2xl font-bold text-white">
    School At Home - 011 41212300
  </h2>
</div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left: clickable image */}
        <div className="md:w-1/2 cursor-pointer" onClick={() => navigate("/school-at-home")}>
          <img
            src="https://www.helpinghandindiango.org/wp-content/uploads/2021/10/anytime-education.png"
            alt="School at Home"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right: textual content */}
        <div className="md:w-1/2 space-y-4 text-gray-700 leading-relaxed">
          <p>
            Helping Hand India NGO Presents “School at Home” No Internet No
            Smartphone, Free Education 24/7 for Persons with Disabilities.
            (+91 11 41212300)
          </p>
          <p>
            SCHOOL AT HOME is a Unique Educational Program (K-12) where all
            categories of School Students can enhance their Education from
            their Home/location without Internet & Smartphone, It is
            available from Nursery to Class 12th curriculum with Live Classes
            & Exercises, Advance General Knowledge Quiz session (MCQ) includes
            Junior/Senior level with English/Hindi Languages.
          </p>
          <p>
            We are well aware of how COVID-19 pandemic is disrupting all
            aspects of our life & affecting academic performance of students,
            causing shifts to online systems. School at Home is very suitable
            for all students especially Disabled/Visually Impaired.
          </p>
          <p>
            We have included a Missed Call IVR facility to connect free of
            cost for Disabled/Poor students. School at Home telephonic
            homeschooling needs only a basic phone; access modules are
            explained via interactive IVRs. (Access No.: +91 11 41212300).
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimpleSpotlight;

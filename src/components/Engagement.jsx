import React from "react";
import { Link } from "react-router-dom";

export default function OrganizationManagement() {
  return (
    <section className="relative w-full">
      {/* Hero Image */}
      <img
        src="https://www.equalopp.org/sites/default/files/node/storie/Demarcus%20Demetrius%20and%20Kiara.png"
        alt="Volunteer Skills"
        className="w-full lg:h-screen md:h-96 object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 drop-shadow-lg">
          Sign up to volunteer your skills
        </h2>
        <p className="text-lg sm:text-xl text-white mb-6 drop-shadow-md">
          and create lasting impact
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/donate"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            DONATE
          </Link>
          <Link
            to="/take-action"
            className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            TAKE ACTION
          </Link>
        </div>
      </div>
    </section>
  );
}

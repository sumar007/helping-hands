import React from "react";
import { Link } from "react-router-dom";

export default function TheIssuePage() {
  return (
    <main className="space-y-16">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.equalopp.org/sites/default/files/base-page/bg-mage/theissue_0.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            THE ISSUE
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white max-w-2xl drop-shadow-md">
            Millions of children around the world face barriers to health, education, and opportunity.
          </p>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Key Statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-5xl font-extrabold text-yellow-500">1 in 4</p>
              <p className="mt-2 text-gray-700">Children live in extreme poverty</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-yellow-500">250k+</p>
              <p className="mt-2 text-gray-700">Children impacted by our programs</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-yellow-500">10k+</p>
              <p className="mt-2 text-gray-700">Volunteers mobilized globally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">The Challenges We Face</h2>
        <div className="space-y-8">
          <article>
            <h3 className="text-2xl font-semibold mb-2">Lack of Access to Education</h3>
            <p className="text-gray-700 leading-relaxed">
              ... description about education barriers ...
            </p>
          </article>
          <article>
            <h3 className="text-2xl font-semibold mb-2">Inadequate Healthcare</h3>
            <p className="text-gray-700 leading-relaxed">
              ... description about healthcare gaps ...
            </p>
          </article>
          <article>
            <h3 className="text-2xl font-semibold mb-2">Food Insecurity</h3>
            <p className="text-gray-700 leading-relaxed">
              ... description about malnutrition and food shortages ...
            </p>
          </article>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="mb-8">
            Join us in tackling these critical issues and help provide equal opportunities for every child.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/donate"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Donate Now
            </Link>
            <Link
              to="/get-involved"
              className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-6 py-3 rounded-full transition"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

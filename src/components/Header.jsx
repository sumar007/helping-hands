import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className=" w-full bg-gray-100 text-gray-700 text-sm flex justify-between items-center px-4 py-1">
        <a
          href="mailto:admin@lillahservices.org"
          className="hover:underline text-blue-600 mr-2"
        >
          admin@lillahservices.org
        </a>
        <span className="hover:text-gray-900 cursor-pointer">Follow us on 📱</span>
      </div>

      {/* Main navbar */}
      <div className="bg-white shadow">
        <div className=" px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo + Tagline */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={logo}
              alt="Lillah Logo"
              className="h-10 w-[160px] mr-3"
            />
            <div>
              <span className="text-sm font-semibold">Dignity above all</span>
              
            </div>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-2 py-1">
              Home
            </Link>

            {/* About with dropdown */}
            <div className="relative">
              <button
                onClick={() => setAboutDropdownOpen((prev) => !prev)}
                className="flex items-center text-gray-700 hover:text-gray-900 px-2 py-1 focus:outline-none"
              >
                <span>About</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {aboutDropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                  <Link
                    to="/about-us"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    About Us
                  </Link>
                </div>
              )}
            </div>

            <Link to="/our-work" className="text-gray-700 hover:text-gray-900 px-2 py-1">
              Our Work
            </Link>
            <Link to="/spotlight" className="text-gray-700 hover:text-gray-900 px-2 py-1">
              Spotlight
            </Link>
            <Link to="/our-team" className="text-gray-700 hover:text-gray-900 px-2 py-1">
              Our Team
            </Link>
            <Link to="/corporate-match" className="text-gray-700 hover:text-gray-900 px-2 py-1">
              Corporate Match
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-2 py-1">
              Contact
            </Link>

            <Link
              to="/donate"
              className="ml-4 inline-block bg-blue-700 text-white px-4 py-1 rounded-full hover:bg-blue-800 transition"
            >
              Donate
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-4 pt-4 pb-6 space-y-1">
              <Link to="/" className="block text-gray-700 hover:text-gray-900 px-2 py-1">
                Home
              </Link>

              <div className="space-y-1">
                <button
                  onClick={() => setAboutDropdownOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between text-gray-700 hover:text-gray-900 px-2 py-1 focus:outline-none"
                >
                  <span>About</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={aboutDropdownOpen ? "M19 15l-7-7-7 7" : "M19 9l-7 7-7-7"}
                    />
                  </svg>
                </button>
                {aboutDropdownOpen && (
                  <div className="pl-4">
                    <Link to="/about-us" className="block text-gray-700 hover:text-gray-900 px-2 py-1">
                      About Us
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/our-work" className="block text-gray-700 hover:text-gray-900 px-2 py-1">
                Our Work
              </Link>
              <Link to="/spotlight" className="block text-gray-700 hover:text-gray-900 px-2 py-1">
                Spotlight
              </Link>
              <Link to="/our-team" className="block text-gray-700 hover:text-gray-900 px-2 py-1">
                Our Team
              </Link>
              <Link to="/corporate-match" className="block text-gray-700 hover:text-gray-900 px-2 py-1">
                Corporate Match
              </Link>
              <Link to="/contact" className="block text-gray-700 hover:text-gray-900 px-2 py-1">
                Contact
              </Link>
              <Link
                to="/donate"
                className="block text-center bg-blue-700 text-white mt-4 px-4 py-2 rounded-full hover:bg-blue-800 transition"
              >
                Donate
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

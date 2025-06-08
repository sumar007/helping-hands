import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <Link to="/">
            <img
              src="https://www.helpinghandindiango.org/wp-content/uploads/2021/09/logo.png"
              alt="Helping Hand India NGO"
              className="h-16 md:h-20"
            />
          </Link>

          <div className="flex items-center space-x-4 hidden md:flex">
            <FaEnvelope />
            <a href="mailto:office@helpinghandindiango.org" className="hover:underline">
              office@helpinghandindiango.org
            </a>

            <a href="#" aria-label="Facebook"><FaFacebookF className="text-blue-800" /></a>
            <a href="#" aria-label="Twitter"><FaTwitter className="text-blue-500" /></a>
            <a href="#" aria-label="YouTube"><FaYoutube className="text-red-600" /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn className="text-blue-600" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="text-black" /></a>

            <span className="flex items-center space-x-1 font-semibold">
              <FaPhoneAlt />
              <span>9990773454, 9873677291</span>
            </span>
          </div>

        </div>
      </div>


      {/* Main Navigation */}
      <div className="bg-[#15386b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 font-semibold text-sm">
              <Link to="/" className="hover:text-orange-400">
                HOME
              </Link>

              <div className="relative">
                <button
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className="flex items-center hover:text-orange-400"
                >
                  ABOUT US
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
                  <div className="absolute z-20 left-0 mt-2 w-44 bg-white text-black rounded shadow-lg">
                    <Link
                      to="/about-us"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      About Us
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/our-work" className="hover:text-orange-400">
                OUR WORKINGS
              </Link>
              <Link to="/blood-donation" className="hover:text-orange-400">
                BLOOD DONATION
              </Link>
              <Link to="/projects-goal" className="hover:text-orange-400">
                PROJECTS ’N’ GOAL
              </Link>
              <Link to="/get-involved" className="hover:text-orange-400">
                GET INVOLVED
              </Link>
              <Link to="/school-at-home" className="hover:text-orange-400">
                SCHOOL AT HOME
              </Link>
              <Link to="/contact" className="hover:text-orange-400">
                CONTACT US
              </Link>
            </nav>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
             <Link
              to="/donate"
              className="ml-4 inline-block bg-orange-500 hover:bg-orange-600 transition px-5 py-2 rounded-full"
            >
              Donate Now
            </Link>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#15386b] px-4 pb-4 space-y-2 font-semibold text-sm">
            <Link to="/" className="block hover:text-orange-400">
              HOME
            </Link>

            <button
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              className="w-full flex justify-between items-center hover:text-orange-400"
            >
              ABOUT US
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    aboutDropdownOpen
                      ? "M19 15l-7-7-7 7"
                      : "M19 9l-7 7-7-7"
                  }
                />
              </svg>
            </button>
            {aboutDropdownOpen && (
              <Link
                to="/about-us"
                className="block pl-4 hover:text-orange-400"
              >
                About Us
              </Link>
            )}

            <Link to="/our-work" className="block hover:text-orange-400">
              OUR WORKINGS
            </Link>
            <Link to="/blood-donation" className="block hover:text-orange-400">
              BLOOD DONATION
            </Link>
            <Link to="/projects-goal" className="block hover:text-orange-400">
              PROJECTS ’N’ GOAL
            </Link>
            <Link to="/get-involved" className="block hover:text-orange-400">
              GET INVOLVED
            </Link>
            <Link to="/school-at-home" className="block hover:text-orange-400">
              SCHOOL AT HOME
            </Link>
            <Link to="/contact" className="block hover:text-orange-400">
              CONTACT US
            </Link>
            <Link
              to="/donate"
              className="block mt-2 bg-orange-500 text-center py-2 rounded-full hover:bg-orange-600 transition"
            >
              Donate Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

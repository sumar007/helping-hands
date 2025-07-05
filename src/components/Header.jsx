import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const toggleAboutDropdown = () => setAboutDropdownOpen(!aboutDropdownOpen);

  return (
    <header className="w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-6 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src="/path/to/new-logo.png"
            alt="Equal Opportunity"
            className="h-10 md:h-12"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            to="/the-issue"
            className="text-gray-800 font-semibold hover:text-yellow-500"
          >
            THE ISSUE
          </Link>

          {/* ABOUT US dropdown trigger */}
          <div className="relative">
            <button
              onClick={toggleAboutDropdown}
              className="flex items-center gap-1 text-gray-800 font-semibold hover:text-yellow-500 focus:outline-none"
            >
              ABOUT US <FiChevronDown />
            </button>

            {/* Dropdown */}
            {aboutDropdownOpen && (
              <div className="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded shadow-md py-2 w-56 z-50">
                <Link
                  to="/about-us"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100"
                  onClick={() => setAboutDropdownOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/our-priorities"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100"
                  onClick={() => setAboutDropdownOpen(false)}
                >
                  Our Priorities
                </Link>
                <Link
                  to="/our-partners"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100"
                  onClick={() => setAboutDropdownOpen(false)}
                >
                  Our Partners
                </Link>
                <Link
                  to="/about-us/our-team"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100"
                  onClick={() => setAboutDropdownOpen(false)}
                >
                  Our Leadership
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/our-impact"
            className="text-gray-800 font-semibold hover:text-yellow-500"
          >
            OUR IMPACT
          </Link>
          <Link
            to="/get-involved"
            className="text-gray-800 font-semibold hover:text-yellow-500"
          >
            GET INVOLVED
          </Link>
          <Link
            to="/donate"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-full transition"
          >
            DONATE
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobile}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <nav className="flex flex-col space-y-4 py-6 px-4">
            <Link
              to="/the-issue"
              onClick={toggleMobile}
              className="text-gray-800 font-medium hover:text-yellow-500"
            >
              THE ISSUE
            </Link>

            {/* About Us Dropdown for Mobile */}
            <div>
              <button
                onClick={toggleAboutDropdown}
                className="flex items-center justify-between w-full text-gray-800 font-medium hover:text-yellow-500"
              >
                ABOUT US <FiChevronDown />
              </button>
              {aboutDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    to="/about-us"
                    className="block text-gray-700 hover:text-yellow-600"
                    onClick={toggleMobile}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/our-priorities"
                    className="block text-gray-700 hover:text-yellow-600"
                    onClick={toggleMobile}
                  >
                    Our Priorities
                  </Link>
                  <Link
                    to="/our-partners"
                    className="block text-gray-700 hover:text-yellow-600"
                    onClick={toggleMobile}
                  >
                    Our Partners
                  </Link>
                  <Link
                    to="/about-us/our-team"
                    className="block text-gray-700 hover:text-yellow-600"
                    onClick={toggleMobile}
                  >
                    Our Leadership
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/our-impact"
              onClick={toggleMobile}
              className="text-gray-800 font-medium hover:text-yellow-500"
            >
              OUR IMPACT
            </Link>
            <Link
              to="/get-involved"
              onClick={toggleMobile}
              className="text-gray-800 font-medium hover:text-yellow-500"
            >
              GET INVOLVED
            </Link>
            <Link
              to="/donate"
              onClick={toggleMobile}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-full transition text-center"
            >
              DONATE
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

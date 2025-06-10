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

  return (
    <header className="w-full">
      {/* Top Contact Bar */}
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
            <a href="#"><FaFacebookF className="text-blue-800" /></a>
            <a href="#"><FaTwitter className="text-blue-500" /></a>
            <a href="#"><FaYoutube className="text-red-600" /></a>
            <a href="#"><FaLinkedinIn className="text-blue-600" /></a>
            <a href="#"><FaInstagram className="text-black" /></a>
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
            <nav className="hidden md:flex space-x-8 font-semibold text-sm">
              <Link to="/" className="hover:text-orange-400">HOME</Link>

              {/* ABOUT US Dropdown */}
              <div className="relative group">
                <button className="flex items-center hover:text-orange-400">
                  ABOUT US
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-44 bg-blue-100 text-black rounded shadow-lg opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out 
                  transform translate-y-2 group-hover:translate-y-0 z-50">
                  <Link to="/about-us" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
                  <Link to="/about-us/our-team" className="block px-4 py-2 hover:bg-gray-100">Our Team</Link>
                  <Link to="/about-us/legal-status" className="block px-4 py-2 hover:bg-gray-100">Legal Status</Link>
                  <Link to="/about-us/photo-gallery" className="block px-4 py-2 hover:bg-gray-100">Photo Gallery</Link>
                </div>
              </div>

              {/* OUR WORKINGS Dropdown */}
              <div className="relative group">
                <button className="flex items-center hover:text-orange-400">
                  OUR WORKINGS
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-52 bg-blue-100 text-black rounded shadow-lg opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out 
                  transform translate-y-2 group-hover:translate-y-0 z-50">
                  <Link to="/our-work/helping-hand" className="block px-4 py-2 hover:bg-gray-100">Helping Hand</Link>
                  <Link to="/our-work/education-childcare" className="block px-4 py-2 hover:bg-gray-100">Education & Child Care</Link>
                  <Link to="/our-work/women-oldage" className="block px-4 py-2 hover:bg-gray-100">Women & Elder Support</Link>
                  <Link to="/our-work/health" className="block px-4 py-2 hover:bg-gray-100">Health Programs</Link>
                  <Link to="/our-work/workfromhome-sponsorship" className="block px-4 py-2 hover:bg-gray-100">Work From Home & Sponsorship</Link>
                </div>
              </div>

              {/* BLOOD DONATION Dropdown */}
              <div className="relative group">
                <button className="flex items-center hover:text-orange-400">
                  BLOOD DONATION
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-44 bg-blue-100 text-black rounded shadow-lg opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out 
                  transform translate-y-2 group-hover:translate-y-0 z-50">
                  <Link to="/blood-donation" className="block px-4 py-2 hover:bg-gray-100">Overview</Link>
                  <Link to="/blood-donation/coupons" className="block px-4 py-2 hover:bg-gray-100">Donation Coupons</Link>
                </div>
              </div>

              {/* GET INVOLVED Dropdown */}
              <div className="relative group">
                <button className="flex items-center hover:text-orange-400">
                  GET INVOLVED
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-44 bg-blue-100 text-black rounded shadow-lg opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out 
                  transform translate-y-2 group-hover:translate-y-0 z-50">
                  <Link to="/get-involved/volunteer" className="block px-4 py-2 hover:bg-gray-100">Volunteer</Link>
                  <Link to="/get-involved/sponsor" className="block px-4 py-2 hover:bg-gray-100">Sponsor a Child</Link>
                </div>
              </div>


              <Link to="/projects-goal" className="hover:text-orange-400">PROJECTS ’N’ GOAL</Link>
              <Link to="/school-at-home" className="hover:text-orange-400">SCHOOL AT HOME</Link>
              <Link to="/contact" className="hover:text-orange-400">CONTACT US</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                  mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                } />
              </svg>
            </button>

            {/* Donate CTA */}
            <a
              href="https://buy.stripe.com/test_fZu5kD0tZ2bv3FH4ipfYY00"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-block bg-orange-500 hover:bg-orange-600 transition px-5 py-2 rounded-full"
            >
              Donate Now
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {/* You can implement the mobile dropdowns using `dropdownOpen` flags just like before */}
      </div>
    </header>
  );
};

export default Header;

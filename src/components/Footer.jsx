import React from "react";
import { Mail, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1d2936] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 lg:grid-cols-4">
        {/* Connect Section */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-2">Connect with us</h3>
          <hr className="border-yellow-400 w-10 mb-4" />
          <div className="flex items-center text-gray-400 mb-4">
            <Mail className="mr-2 bg-white text-gray-800 rounded p-1 w-6 h-6" />
            <span>admin@lillahservices.org</span>
          </div>
          <h4 className="text-yellow-400 font-semibold mb-2">Follow Us</h4>
          <hr className="border-yellow-400 w-10 mb-4" />
          <Smartphone className="text-gray-400 w-6 h-6" />
          {/* Add social icons here */}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-2">Quick Link</h3>
          <hr className="border-yellow-400 w-10 mb-4" />
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/our-work" className="hover:text-white">Our Work</Link></li>
            <li><Link to="/our-team" className="hover:text-white">Our Team</Link></li>
            <li><Link to="/corporate-match" className="hover:text-white">Corporate Match</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="md:col-span-2">
          <h3 className="text-yellow-400 font-semibold mb-2">
            Signup for our newsletter
          </h3>
          <hr className="border-yellow-400 w-10 mb-4" />
          <form className="space-y-4 max-w-md">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 rounded bg-[#2e3b4c] text-white border border-gray-600 focus:outline-none focus:ring focus:ring-yellow-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 rounded bg-[#2e3b4c] text-white border border-gray-600 focus:outline-none focus:ring focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-[#2e3b4c] text-white border border-gray-600 focus:outline-none focus:ring focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-black text-white font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center border-t border-gray-700 pt-6 text-gray-400 text-sm">
        © 2025. Lillah Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

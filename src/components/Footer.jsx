import React from "react";
import { Mail, Smartphone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1d2936] text-white px-6 py-6">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 lg:grid-cols-4">
        {/* Logo & About */}
        <div className="md:col-span-1">
          <img
            src="https://www.helpinghandindiango.org/wp-content/uploads/2021/09/logo.png"
            alt="Helping Hand India Logo"
            className="mb-4 w-[300px] h-20 object-contains mx-auto md:mx-0"
          />
          <p className="text-gray-300 text-sm">
            Helping Hand India NGO working at National level for Education,
            Rehabilitation, and Food to economically backward, elderly &
            persons with disabilities. Focused on Educational Empowerment
            for underprivileged children, women & the disabled.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-2">Contact</h3>
          <hr className="border-yellow-400 w-10 mb-4" />
          <div className="flex items-start text-gray-400 mb-3">
            <MapPin className="mr-2 mt-1 w-5 h-5 text-white" />
            <span className="text-sm">
              Kakrola, Near Dwarka Mor Metro Station, New Delhi –110078
              (Hostel will reopen after Coronavirus Pandemic)
            </span>
          </div>
          <div className="flex items-center text-gray-400 mb-2">
            <Mail className="mr-2 text-white w-5 h-5" />
            <span className="text-sm">
              office@helpinghandindiango.org
            </span>
          </div>
          <div className="flex items-center text-gray-400">
            <Smartphone className="mr-2 text-white w-5 h-5" />
            <span className="text-sm">+91-9990773454, 9873677291</span>
          </div>
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-2">Menu</h3>
          <hr className="border-yellow-400 w-10 mb-4" />
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/our-work" className="hover:text-white">Our Workings</Link></li>
            <li><Link to="/blood-support" className="hover:text-white">Blood Support</Link></li>
            <li><Link to="/techie-girl" className="hover:text-white">Techie Girl</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/refund" className="hover:text-white">Refund Policy</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-2">Subscribe</h3>
          <hr className="border-yellow-400 w-10 mb-4" />
          <p className="text-sm text-gray-400 mb-4">
            Sign up to hear and get new update via email.
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded bg-[#2e3b4c] text-white border border-gray-600 focus:outline-none"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-2 rounded bg-[#2e3b4c] text-white border border-gray-600 focus:outline-none"
            />
            <input
              type="date"
              className="w-full p-2 rounded bg-[#2e3b4c] text-white border border-gray-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone no"
              className="w-full p-2 rounded bg-[#2e3b4c] text-white border border-gray-600 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-4 text-center border-t border-gray-700 pt-6 text-gray-400 text-sm">
        © {new Date().getFullYear()}. Helping Hand India NGO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

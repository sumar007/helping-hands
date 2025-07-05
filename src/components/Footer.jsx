import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaRss,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT</h3>
          <img
            src="/path/to/logo.png"
            alt="Equal Opportunity"
            className="h-12 mb-4"
          />
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-yellow-500" />
              +1 123-58847-859
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-yellow-500" />
              info@abcdefg.com
            </li>
            <li className="flex items-center">
              <FaGlobe className="mr-2 text-yellow-500" />
              www.abcdefgh.com
            </li>
          </ul>
        </div>

        {/* LINKS */}
        <div className="border-l border-r border-gray-200 px-6">
          <h3 className="text-lg font-bold mb-4">LINKS</h3>
          <ul className="space-y-3 text-gray-700">
            {[
              { label: "About Us", to: "/about-us" },
              { label: "Get Involved", to: "/get-involved" },
              { label: "Contact Us", to: "/contact" },
              { label: "Terms & Conditions", to: "/terms" },
              { label: "Privacy Policy", to: "/privacy" },
            ].map((link) => (
              <li key={link.to} className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                <Link to={link.to} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONNECT WITH US</h3>
          <p className="text-gray-700 mb-4">
            Stay in touch through our social channels:
          </p>
          <div className="flex space-x-4">
            {[
              { icon: <FaTwitter />, to: "https://twitter.com" },
              { icon: <FaLinkedinIn />, to: "https://linkedin.com" },
              { icon: <FaInstagram />, to: "https://instagram.com" },
              { icon: <FaYoutube />, to: "https://youtube.com" },
              { icon: <FaRss />, to: "/rss.xml" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-600 text-2xl"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

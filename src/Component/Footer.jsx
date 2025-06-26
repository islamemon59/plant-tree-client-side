import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSeedling,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-green-900 text-primary dark:text-primary mt-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaSeedling className="text-3xl" />
            <h2 className="text-2xl font-extrabold tracking-wide">
              GreenRoots
            </h2>
          </div>
          <p className="text-sm leading-relaxed opacity-90 max-w-sm">
            Cultivating a greener tomorrow — planting trees, nurturing life, and
            growing hope. Join us on the journey to restore our planet.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-green-600/50 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-green-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutUs" className="hover:text-green-600 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/allPlants" className="hover:text-green-600 transition">
                All Plants
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-green-600/50 pb-2">
            Connect With Us
          </h3>
          <div className="flex gap-6 text-xl">
            <a
              href="https://www.facebook.com/n.bi.ta.554015"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/IstiakAhme13930"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/emon489938/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
          <p className="text-xs mt-6 opacity-70">
            © {new Date().getFullYear()} GreenRoots. Built with love for Earth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

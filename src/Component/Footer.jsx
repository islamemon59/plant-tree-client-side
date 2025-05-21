import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaTwitter, FaInstagram, FaSeedling } from "react-icons/fa";

const Footer = () => {
    return (
    <footer className="bg-green-900 text-green-100 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-3 mb-4">
            <FaSeedling className="text-4xl text-green-400" />
            <h2 className="text-2xl font-extrabold tracking-wide">GreenRoots</h2>
          </div>
          <p className="max-w-sm text-green-200">
            Cultivating a greener tomorrow — planting trees, nurturing life, and growing hope. Join us on the journey to restore our planet.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-3 text-green-200">
          <h3 className="text-xl font-semibold mb-4 border-b border-green-600 pb-2">Quick Links</h3>
          <Link to="/" className="hover:text-green-400 transition">Home</Link>
          <Link to="/about" className="hover:text-green-400 transition">About Us</Link>
          <Link to="/plants" className="hover:text-green-400 transition">Our Plants</Link>
          <Link to="/contact" className="hover:text-green-400 transition">Contact</Link>
        </div>

        {/* Social & Contact */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-xl font-semibold mb-4 border-b border-green-600 pb-2">Connect With Us</h3>
          <div className="flex space-x-6 text-green-300">
            <a href="https://www.facebook.com/n.bi.ta.554015" target="_blank" rel="noreferrer" className="hover:text-green-400 transition text-2xl">
              <FaFacebookF />
            </a>
            <a href="https://x.com/IstiakAhme13930" target="_blank" rel="noreferrer" className="hover:text-green-400 transition text-2xl">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/emon489938/" target="_blank" rel="noreferrer" className="hover:text-green-400 transition text-2xl">
              <FaInstagram />
            </a>
          </div>
          <p className="text-green-300 text-sm mt-4 max-w-xs text-center md:text-left">
            © {new Date().getFullYear()} GreenRoots. Made with 💚 for Earth and all its living beings.
          </p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;
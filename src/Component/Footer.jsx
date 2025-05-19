import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";
import { Link } from 'react-router';

const Footer = () => {
    return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="footer p-10 max-w-7xl mx-auto">
        <div>
          {/* <FaLeaf className="text-3xl text-green-600 mb-2" /> */}
          <img className="text-green-600 mb-2 w-10" src="logo.png" alt="logo" />
          <p className="text-lg font-semibold">
            Plant Store 🌱<br />
            Growing a greener world, one tree at a time.
          </p>
        </div>
        <div>
          <span className="footer-title">Navigation</span>
          <Link to="/" className="link link-hover">Home</Link>
          <Link to="/about" className="link link-hover">About</Link>
          <Link to="/plants" className="link link-hover">Plants</Link>
          <Link to="/contact" className="link link-hover">Contact</Link>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com/n.bi.ta.554015" className="text-xl hover:text-green-500"><FaFacebook /></a>
            <a href="https://x.com/IstiakAhme13930" className="text-xl hover:text-green-500"><FaTwitter /></a>
            <a href="https://www.instagram.com/emon489938/" className="text-xl hover:text-green-500"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-base-300 text-sm">
        © {new Date().getFullYear()} GreenRoots. Made with 💚 for the Earth.
      </div>
    </footer>
    );
};

export default Footer;
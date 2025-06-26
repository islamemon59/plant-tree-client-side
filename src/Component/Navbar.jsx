import React, { useContext, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/CreateContex";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaSeedling } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { themeChange } from "theme-change";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Initialize theme controller
  useEffect(() => {
    themeChange(false);
  }, []);

  // Logout handler
  const handleLogout = () => {
    signOutUser()
      .then(() => {
        navigate("/");
        Swal.fire({
          title: "Logout Successful",
          icon: "success",
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Navigation Links
  const navLinks = (
    <>
      <li>
        <NavLink to="/" end className="font-medium text-gray-500">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allPlants" className="font-medium text-gray-500">
          All Plants
        </NavLink>
      </li>
      <li>
        <NavLink to="/addPlant" className="font-medium text-gray-500">
          Add Plant
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to={`/myPlants/${user?.email}`}
            className="font-medium text-gray-500"
          >
            My Plants
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/aboutUs" className="font-medium text-gray-500">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="font-medium text-gray-500">
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-secondary shadow-md">
      <nav className="navbar py-4 px-4 max-w-7xl mx-auto">
        {/* Start: Logo & Mobile Menu */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-primary text-2xl font-bold"
          >
            <FaSeedling className="text-3xl" />
            <span className="hidden md:inline">GreenRoots</span>
          </Link>
        </div>

        {/* Center: Nav Links (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* End: Theme Toggle + Auth Buttons */}
        <div className="navbar-end gap-2">
          {/* Theme Toggle */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="luxury"
            />

            <svg
              className="swap-off w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* Auth Section */}
          {user ? (
            <div className="flex items-center gap-2">
              {/* Avatar */}
              <div
                data-tooltip-id="user-tooltip"
                data-tooltip-content={user?.displayName}
              >
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} alt="user" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Logout */}
              <button
                onClick={handleLogout}
                className="btn btn-primary btn-sm text-primary-content"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/login"
                className="btn btn-primary btn-sm text-primary-content"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-primary btn-sm text-primary-content"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Tooltip */}
        <Tooltip id="user-tooltip" />
      </nav>
    </header>
  );
};

export default Navbar;

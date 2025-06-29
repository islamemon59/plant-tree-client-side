import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router"; // Use react-router
import {
  FaHome,
  FaSeedling,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaLeaf,
  FaPlusCircle,
} from "react-icons/fa";
import { AuthContext } from "../Context/CreateContex";

const Dashboard = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // State to control sidebar visibility on mobile only
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar for mobile devices
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLogout = () => {
    signOutUser();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-base-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 bg-secondary left-0 min-h-screen border-r border-gray-300 dark:border-gray-700 p-6 flex flex-col text-gray-900 dark:text-gray-400
          w-72 min-w-[288px]
          md:relative md:translate-x-0
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          z-40
        `}
      >
        {/* Brand & Close Button */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2">
              <NavLink
                to="/"
                className="text-3xl font-bold text-primary flex items-center gap-1"
              >
                <FaSeedling className="text-3xl" />
                <span>Help Nest</span>{" "}
              </NavLink>
              <label className="swap swap-rotate text-primary">
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
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Green your world
            </p>
          </div>
          {/* Close button ONLY on mobile when sidebar is open */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-primary dark:text-gray-100 focus:outline-none"
            aria-label="Close sidebar"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Navigation NavLinks */}
        <nav className="flex flex-col gap-3 flex-grow">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-500 hover:bg-primary/20 transition"
            onClick={() => sidebarOpen && toggleSidebar()}
          >
            <FaHome /> Dashboard Home
          </Link>
          <NavLink
            to="/dashboard/allPlants"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-500 hover:bg-primary/20 transition"
            onClick={() => sidebarOpen && toggleSidebar()}
          >
            <FaLeaf /> All Plants
          </NavLink>
          <NavLink
            to="/dashboard/addPlant"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-500 hover:bg-primary/20 transition"
            onClick={() => sidebarOpen && toggleSidebar()}
          >
            <FaPlusCircle /> Add Plant
          </NavLink>

          <NavLink
            to={`/dashboard/myPlants/${user?.email}`}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-500 hover:bg-primary/20 transition"
            onClick={() => sidebarOpen && toggleSidebar()}
          >
            <FaSeedling /> My Plants
          </NavLink>

          <NavLink
            to="/dashboard/profile"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-500 hover:bg-primary/20 transition"
            onClick={() => sidebarOpen && toggleSidebar()}
          >
            <FaUser /> Profile
          </NavLink>

          <button
            onClick={handleLogout}
            className="mt-auto flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600 hover:text-white transition text-red-600"
            aria-label="Logout"
          >
            <FaSignOutAlt /> Logout
          </button>
        </nav>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 dark:text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} Help Nest. All rights reserved.
        </footer>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-4 overflow-auto relative">
        {/* Hamburger toggle button - only visible on mobile */}
        {!sidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="fixed top-4 right-4 z-50 md:hidden p-1 rounded-md bg-transparent text-primary focus:outline-none"
            aria-label="Open sidebar"
          >
            <FaBars size={24} />
          </button>
        )}

        <div className="max-w-7xl mx-auto">
          {/* <h2 className="text-4xl font-extrabold text-primary mb-4">
            Welcome to Your Dashboard
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Manage your plants, track your contributions, and explore new ways
            to help nature thrive.
          </p> */}

          {/* <div className="space-y-4 mb-12 text-gray-700 dark:text-gray-400">
            <p>
              Use the sidebar to navigate between sections like My Plants,
              Profile, and Settings.
            </p>
            <p>
              Keep your account info up-to-date and track your planting history
              easily.
            </p>
          </div> */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

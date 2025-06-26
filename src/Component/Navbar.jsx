import React, { use, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/CreateContex";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaSeedling } from "react-icons/fa";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { themeChange } from "theme-change";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    themeChange(false);
  }, []);
  const links = (
    <>
      <li>
        <NavLink to="/" className="font-semibold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allPlants" className="font-semibold">
          All Plants
        </NavLink>
      </li>
      <li>
        <NavLink to="/addPlant" className="font-semibold">
          Add Plant
        </NavLink>
      </li>
      <li>
        <NavLink to={`/myPlants/${user?.email}`} className="font-semibold">
          My Plants
        </NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs" className="font-semibold">
          About us
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        navigate("/");
        Swal.fire({
          title: "Logout Successful",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  return (
    <div className="navbar bg-transparent py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="md:text-4xl font-semibold text-green-600 text-xl md:py-2 flex justify-center items-center gap-2 px-2">
          <Link className="flex justify-center items-center" to="/">
            <FaSeedling className="text-4xl text-green-400" />
            <span className="md:block hidden">GreenRoots</span>
          </Link>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex justify-center items-center gap-1">
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user?.displayName}
              data-tooltip-place="bottom"
            >
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
              </div>
            </a>
            <div className="flex md:flex-row flex-col justify-center items-center gap-1">
              <button
                className="btn bg-green-500 hover:bg-green-300 transition duration-500 md:text-[16px] text-xs"
                onClick={() => {
                  handleLogout(), scrollTo(0, 0);
                }}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="space-x-3 flex md:flex-row flex-col justify-end">
            <Link
              onClick={() => {
                scrollTo(0, 0);
              }}
              className="btn bg-green-500 hover:bg-green-300 transition duration-500 md:text-[16px] text-xs"
              to="/login"
            >
              Login
            </Link>
            <Link
              onClick={() => {
                scrollTo(0, 0);
              }}
              className="btn bg-green-500 hover:bg-green-300 transition duration-500 md:text-[16px] text-xs"
              to="/register"
            >
              Register
            </Link>
          </div>
        )}
        <label
          className="toggle text-base-content ml-1 gradientselect"
          data-choose-theme
        >
          <input type="checkbox" value="dark" className="theme-controller" />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;

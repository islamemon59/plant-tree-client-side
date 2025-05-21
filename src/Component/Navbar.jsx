import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/CreateContex";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaSeedling } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();
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
        <NavLink to="/myPlants" className="font-semibold">
          My Plants
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="font-semibold">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className="font-semibold">
          Register
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
    <div className="navbar bg-transparent">
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
        <a className="md:text-4xl font-semibold text-green-600 text-xl md:py-2 flex justify-center items-center gap-2"><FaSeedling className="text-4xl text-green-400" /><span>GreenRoots</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="text-xl font-bold text-center">
                 Name: {user.displayName}
              </li>
              <button className="btn bg-green-500 hover:bg-green-300 transition duration-500 md:text-[16px] text-xs mt-4" onClick={handleLogout}>
                Logout
              </button>
            </ul>
          </div>
        ) : (
          <div className="space-x-3 flex md:flex-row flex-col justify-end">
            <Link className="btn bg-green-500 hover:bg-green-300 transition duration-500 md:text-[16px] text-xs" to="/login">Login</Link>
            <Link className="btn bg-green-500 hover:bg-green-300 transition duration-500 md:text-[16px] text-xs" to="/register">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

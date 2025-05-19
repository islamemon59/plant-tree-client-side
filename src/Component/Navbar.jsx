import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/CreateContex";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();
  const links = (
    <>
      <li>
        <NavLink to="/" className="">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className="">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/addPlant" className="">
          AddPlant
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
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
        <a className="btn btn-ghost text-xl">daisyUI</a>
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
              <li>
                <a>Name: {user.displayName}</a>
              </li>
              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="space-x-3">
            <Link className="btn" to="/login">Login</Link>
            <Link className="btn" to="/register">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

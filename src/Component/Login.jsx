import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/CreateContex";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, setUser, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const currentUser = result.user;
        Swal.fire({
          title: "Login Successful",
          icon: "success",
          draggable: true,
        });
        setUser(currentUser);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(`${error.message}`);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const currentUser = result.user;
        Swal.fire({
          title: "Login Successful",
          icon: "success",
          draggable: true,
        });
        setUser(currentUser);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  return (
    <div className="min-h-[calc(100vh-120px)] flex justify-center items-center flex-col">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body space-y-2">
          <h1 className="text-3xl text-center font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="fieldset space-y-1">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              //   ref={emailRef}
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <div>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn btn-outline mt-4 w-full"
              >
                <FcGoogle size={24} /> Login with Google
              </button>
            </div>
            <p className="font-semibold">
              Create new account{" "}
              <Link className="text-indigo-500" to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

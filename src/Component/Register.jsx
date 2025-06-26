import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/CreateContex";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const Register = () => {
  const { user, setUser, createUser, signInWithGoogle, updateUserProfile } =
    use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    if (!/^(?=.*[A-Z]).+$/.test(password)) {
      return toast.error("Must have an Uppercase letter");
    }
    if (!/^(?=.*[a-z]).+$/.test(password)) {
      return toast.error("Must have an Lowercase letter");
    }
    if (/^.{6}$/.test(password)) {
      return toast.error("Length must be at least 6 character");
    }

    createUser(email, password)
      .then((result) => {
        const currentUser = result.user;
        Swal.fire({
          title: "SignUp Successful",
          icon: "success",
          draggable: true,
        });
        setUser(currentUser);
        navigate(location?.state || "/");
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch(() => {});
        console.log(currentUser);
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const currentUser = result.user;
        Swal.fire({
          title: "SignUp Successful",
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
    <div className="min-h-[calc(100vh-80px)] flex justify-center items-center flex-col">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body space-y-2">
          <h1 className="text-3xl text-center font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="fieldset space-y-1">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Name"
              required
            />
            <label className="label">PhotoURL</label>
            <input
              type="text"
              className="input"
              name="photo"
              placeholder="PhotoURL"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
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
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <div>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn btn-outline mt-4 w-full"
              >
                <FcGoogle size={24} /> Signup with Google
              </button>
            </div>
            <p className="font-semibold">
              Already have an account{" "}
              <Link className="text-indigo-500" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

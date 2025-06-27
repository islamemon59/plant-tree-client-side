/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Context/CreateContex";
import { auth } from "../../Firebase.config";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      setEditing(false);
      window.location.reload();
    } catch (err) {
      toast("Failed to update profile:", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto mt-10 px-4"
    >
      <div className="bg-secondary/20 rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          My Profile
        </h2>

        {/* User Profile Picture */}
        {user?.photoURL && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-8"
          >
            <img
              src={user.photoURL}
              alt="User Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary"
            />
          </motion.div>
        )}

        {editing ? (
          <motion.form
            onSubmit={handleProfileUpdate}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label className="text-sm text-gray-500 mb-1 block">
                Full Name
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 mb-1 block">
                Profile Image URL
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </div>

            <div className="md:col-span-2 flex justify-center gap-4 mt-6">
              <button type="submit" className="btn btn-success">
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="btn btn-error"
              >
                Cancel
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between md:flex-row flex-col gap-5">
              <div>
                <p className="text-sm text-gray-500 mb-1">Full Name</p>
                <h3 className="text-lg font-semibold text-primary dark:text-gray-200">
                  {user?.displayName || "N/A"}
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Email Address</p>
                <h3 className="text-lg font-semibold text-primary dark:text-gray-200">
                  {user?.email}
                </h3>
              </div>
            </div>

            <div className="mt-10 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setEditing(true)}
                className="btn btn-primary px-6"
              >
                Edit Profile
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Profile;

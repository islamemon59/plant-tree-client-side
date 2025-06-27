/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import { FaTree, FaUserAlt, FaLeaf, FaCalendarAlt } from "react-icons/fa";
import { AuthContext } from "../../Context/CreateContex";
import Loading from "../../Component/Loading";
import { motion } from "framer-motion";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([]);
  const [easy, setEasy] = useState([]);
  const [moderate, setModerate] = useState([]);
  const [difficult, setDifficult] = useState([]);

  useEffect(() => {
    fetch("https://plant-tree-server.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      });
    fetch("https://plant-tree-server.vercel.app/easy")
      .then((res) => res.json())
      .then((data) => {
        setEasy(data);
        setLoading(false);
      });
    fetch("https://plant-tree-server.vercel.app/moderate")
      .then((res) => res.json())
      .then((data) => {
        setModerate(data);
        setLoading(false);
      });
    fetch("https://plant-tree-server.vercel.app/difficult")
      .then((res) => res.json())
      .then((data) => {
        setDifficult(data);
        setLoading(false);
      });
  }, [user.email]);

  if (loading) return <Loading />;

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-primary/10 p-6 rounded-xl shadow text-center"
        >
          <FaTree className="text-4xl text-primary mx-auto mb-2" />
          <h3 className="text-xl font-bold text-primary">{stats.length}</h3>
          <p className="text-gray-600">Total Plants</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-green-100 p-6 rounded-xl shadow text-center"
        >
          <FaLeaf className="text-4xl text-green-600 mx-auto mb-2" />
          <h3 className="text-xl font-bold text-green-700">{easy.length}</h3>
          <p className="text-gray-600">Easy Plants</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-100 p-6 rounded-xl shadow text-center"
        >
          <FaLeaf className="text-4xl text-yellow-600 mx-auto mb-2" />
          <h3 className="text-xl font-bold text-yellow-700">
            {moderate.length}
          </h3>
          <p className="text-gray-600">Moderate Plants</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-red-100 p-6 rounded-xl shadow text-center"
        >
          <FaLeaf className="text-4xl text-red-600 mx-auto mb-2" />
          <h3 className="text-xl font-bold text-red-700">{difficult.length}</h3>
          <p className="text-gray-600">Difficult Plants</p>
        </motion.div>
      </motion.div>

      {/* User Profile Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-secondary rounded-xl shadow-md p-8"
      >
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Welcome Back!
        </h2>

        {user?.photoURL && (
          <div className="flex justify-center mb-8">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              src={user.photoURL}
              alt="User Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-primary"
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
          <div>
            <p className="text-sm text-gray-500 mb-1">Full Name</p>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {user?.displayName || "N/A"}
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Email</p>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {user?.email || "--"}
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Extra Section: Recent Activity + Planting Tips */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12"
      >
        {/* Recent Activity */}
        <div className="bg-base-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            🌿 Recent Activity
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>✅ You logged in successfully.</li>
            <li>🪴 You viewed the “All Plants” page.</li>
            <li>📤 You added a new plant to your collection.</li>
            <li>⚙️ Updated profile information recently.</li>
          </ul>
        </div>

        {/* Planting Tips */}
        <div className="bg-base-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            🌱 Tips for Better Plant Care
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
            <li>Use filtered water for sensitive plants.</li>
            <li>Keep your soil moist but not soggy.</li>
            <li>Provide enough sunlight based on care level.</li>
            <li>Clean your plant’s leaves weekly.</li>
            <li>Rotate plants to ensure even growth.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardHome;

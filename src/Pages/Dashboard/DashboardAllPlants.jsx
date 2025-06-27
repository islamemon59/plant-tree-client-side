import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router";
import { FcViewDetails } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";

const DashboardAllPlants = () => {
  const initialPlants = useLoaderData();
  const [plants, setPlants] = React.useState([]);

  useEffect(() => {
    setPlants(initialPlants || []);
  }, [initialPlants]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  const handleAllData = () => {
    fetch("https://plant-tree-server.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data || []));
  };

  const handleEasyData = () => {
    fetch("https://plant-tree-server.vercel.app/easy")
      .then((res) => res.json())
      .then((data) => setPlants(data || []));
  };

  const handleModerateData = () => {
    fetch("https://plant-tree-server.vercel.app/moderate")
      .then((res) => res.json())
      .then((data) => setPlants(data || []));
  };

  const handleDifficultData = () => {
    fetch("https://plant-tree-server.vercel.app/difficult")
      .then((res) => res.json())
      .then((data) => setPlants(data || []));
  };

  return (
    <div className="min-h-screen py-10 max-w-7xl mx-auto" data-aos="fade-up">
      <div className="text-center mb-10" data-aos="fade-down" data-aos-duration="1000">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          All Plants Collection Here
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
          Browse through our curated collection of plants by category and care
          level.
        </p>
      </div>

      <div className="dropdown mb-8 text-center" data-aos="fade-right" data-aos-delay="100">
        <button
          tabIndex={0}
          className="btn bg-primary hover:bg-green-600 text-gray-800"
        >
          Sorted by
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 dark:bg-gray-900 rounded-md shadow-lg w-44 p-2 mt-1"
        >
          <li onClick={handleAllData}>
            <button className="w-full text-left">All</button>
          </li>
          <li onClick={handleEasyData}>
            <button className="w-full text-left">Easy</button>
          </li>
          <li onClick={handleModerateData}>
            <button className="w-full text-left">Moderate</button>
          </li>
          <li onClick={handleDifficultData}>
            <button className="w-full text-left">Difficult</button>
          </li>
        </ul>
      </div>

      {plants.length === 0 ? (
        <p className="text-center py-10 text-gray-500 dark:text-gray-400" data-aos="fade-up">
          No plants available.
        </p>
      ) : (
        <div className="overflow-x-auto" data-aos="fade-up" data-aos-delay="100">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="bg-primary text-primary-content text-sm">
                <th>No</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Category</th>
                <th>Watering</th>
                <th>Care Level</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {plants.map((plant, index) => (
                <tr key={plant._id} className="hover" data-aos="zoom-in" data-aos-delay={index * 50}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={plant.photo}
                      alt={plant.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="font-semibold text-primary">{plant.name}</td>
                  <td>{plant.category}</td>
                  <td>{plant.watering}</td>
                  <td>{plant.careLevel}</td>
                  <td>
                    <Link
                      to={`/viewDetails/${plant._id}`}
                      className="btn btn-sm btn-outline text-primary flex items-center gap-1"
                    >
                      <FcViewDetails /> View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DashboardAllPlants;

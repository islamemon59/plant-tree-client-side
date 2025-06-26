import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router"; // keep your original import
import { FcViewDetails } from "react-icons/fc";

const AllPlants = () => {
  const initialPlants = useLoaderData();
  const [plants, setPlants] = React.useState([]);

  useEffect(() => {
    setPlants(initialPlants || []);
  }, [initialPlants]);

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
    <div className="min-h-screen px-4 py-10 max-w-7xl mx-auto mt-28">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          All Plants Collection Here
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
          Browse through our curated collection of plants by category and care
          level.
        </p>
      </div>

      <div className="dropdown mb-8 text-center">
        <button
          tabIndex={0}
          className="btn bg-primary hover:bg-green-600 text-gray-800"
          aria-haspopup="listbox"
          aria-expanded="false"
        >
          Sorted by
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 dark:bg-gray-900 rounded-md shadow-lg w-44 p-2 mt-1"
          role="listbox"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {plants.length === 0 ? (
          <p className="col-span-full text-center py-10 text-gray-500 dark:text-gray-400">
            No plants available.
          </p>
        ) : (
          plants.map((plant) => (
            <Link
              to={`/viewDetails/${plant._id}`}
              onClick={() => window.scrollTo(0, 0)}
              className="bg-secondary/20 rounded-xl shadow-md p-4 flex flex-col transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg no-underline"
            >
              <img
                src={plant.photo}
                alt={plant.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold text-primary mb-1">
                {plant.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {plant.category}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Watering: {plant.watering}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Care Level: {plant.careLevel}
              </p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default AllPlants;

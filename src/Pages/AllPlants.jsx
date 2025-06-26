import React, { use, useEffect } from "react";
import { FcViewDetails } from "react-icons/fc";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Context/CreateContex";

const AllPlants = () => {
  const initialPlants = useLoaderData();
  const { plants, setPlants } = use(AuthContext);

  useEffect(() => {
    setPlants(initialPlants);
  }, [initialPlants, setPlants]);

  const handleAllData = () => {
    fetch("https://plant-tree-server.vercel.app/plants")
    .then(res => res.json())
    .then(data => setPlants(data))
  }

  const handleEasyData = () => {
    fetch("https://plant-tree-server.vercel.app/easy")
    .then(res => res.json())
    .then(data => setPlants(data))
  }
  const handleModerateData = () => {
    fetch("https://plant-tree-server.vercel.app/moderate")
    .then(res => res.json())
    .then(data => setPlants(data))
  }
  const handleDifficultData = () => {
    fetch("https://plant-tree-server.vercel.app/difficult")
    .then(res => res.json())
    .then(data => setPlants(data))
  }

  return (
    <div>
      <h1 className="text-center md:text-5xl text-3xl font-semibold text-primary my-10">
        All Plants Collection Here
      </h1>

      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1 bg-success">
          Sorted by
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={handleAllData}>
            <a>All</a>
          </li>
          <li onClick={handleEasyData}>
            <a>Easy</a>
          </li>
          <li onClick={handleModerateData}>
            <a>Moderate</a>
          </li>
          <li onClick={handleDifficultData}>
            <a>Difficult</a>
          </li>
        </ul>
      </div>

      <div className="overflow-x-auto py-6">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Name</th>
              <th>Category</th>
              <th>Watering Frequency</th>
              <th>Care Level</th>
              <th>Auction</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {plants.map((plant) => (
              <tr key={plant._id}>
                <th>
                  <label></label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar"></div>
                    <div>
                      <div className="font-bold">{plant.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {plant.category}
                  <br />
                </td>
                <td>{plant.watering}</td>
                <td>{plant.careLevel}</td>
                <th>
                  <Link onClick={() => {scrollTo(0, 0)}} to={`/viewDetails/${plant._id}`}>
                    {" "}
                    <button className="btn rounded-full btn-success">
                      Details
                    </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPlants;

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
  console.log(plants);
  return (
    <div>
      <h1 className="text-center md:text-5xl text-3xl font-semibold text-green-500 my-10">
        All Plants Collection Here
      </h1>
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
                <th>
                  <Link to={`/viewDetails/${plant._id}`}>
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

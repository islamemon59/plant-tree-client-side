import React from "react";
import {
  FaTint,
  FaEdit,
  FaTrash,
  FaCalendarAlt,
  FaLeaf,
  FaSeedling,
} from "react-icons/fa";
import { Link } from "react-router";
import Info from "../Component/Info";
import Swal from "sweetalert2";

const UserMyPlants = ({ plant, myPlants, setMyPlants }) => {
  const handleDeletePlant = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://plant-tree-server.vercel.app/plants/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingPlants = myPlants.filter((p) => p._id !== id);
              setMyPlants(remainingPlants);
              Swal.fire({
                title: "Deleted!",
                text: "Your plant has been deleted.",
                icon: "success",
                confirmButtonColor: "#22c55e",
              });
            }
          });
      }
    });
  };

  return (
    <div className="max-w-sm w-full bg-base-100 border border-green-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={plant.photo}
          alt={plant.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
            <FaSeedling className="text-green-500" />
            {plant.name}
          </h2>
          <span className="badge badge-success">{plant.health}</span>
        </div>

        <p className="text-sm text-gray-600 italic">{plant.description}</p>

        <div className="space-y-2 text-sm text-gray-700">
          <Info
            label="Category"
            icon={<FaLeaf className="text-green-400" />}
            value={plant.category}
          />
          <Info
            label="Care"
            icon={<FaSeedling className="text-yellow-500" />}
            value={plant.careLevel}
          />
          <Info
            label="Watering"
            icon={<FaTint className="text-blue-400" />}
            value={`Every ${plant.watering}`}
          />
          <Info
            label="Last Watered"
            icon={<FaCalendarAlt className="text-purple-400" />}
            value={plant.lastWateredDate}
          />
          <Info
            label="Next Watering"
            icon={<FaCalendarAlt className="text-orange-400" />}
            value={plant.nextWateringDate}
          />
        </div>

        <p className="text-xs text-gray-500 pt-2">
          <span className="font-medium">{plant.userName}</span> – {plant.email}
        </p>

        <div className="flex justify-between mt-4">
          <Link
            to={`/updatePlant/${plant._id}`}
            onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
            className="btn btn-sm btn-outline btn-success gap-2"
          >
            <FaEdit />
            Update
          </Link>
          <button
            onClick={() => handleDeletePlant(plant._id)}
            className="btn btn-sm btn-outline btn-error gap-2"
          >
            <FaTrash />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserMyPlants;

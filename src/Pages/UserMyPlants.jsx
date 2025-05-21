import React from 'react';
import { FaTint, FaEdit, FaTrash, FaCalendarAlt, FaLeaf, FaSeedling } from "react-icons/fa";
import { Link } from "react-router";
import Info from '../Component/Info';

const UserMyPlants = ({plant}) => {
    console.log(plant);
    return (
<div className="max-w-sm w-full bg-white border border-green-200 shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={plant.photo}
          alt={plant.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        {/* Title & Health */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-green-700 flex items-center gap-2">
            <FaSeedling className="text-green-500" />
            {plant.name}
          </h2>
          <span className="badge badge-success text-white">{plant.health}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm italic">{plant.description}</p>

        {/* Info */}
        <div className="text-sm text-gray-700 space-y-1">
          <Info label="Category" icon={<FaLeaf className="text-green-400" />} value={plant.category} />
          <Info label="Care" icon={<FaSeedling className="text-yellow-500" />} value={plant.careLevel} />
          <Info label="Watering" icon={<FaTint className="text-blue-400" />} value={`Every ${plant.watering}`} />
          <Info label="Last Watered" icon={<FaCalendarAlt className="text-purple-400" />} value={plant.lastWateredDate} />
          <Info label="Next Watering" icon={<FaCalendarAlt className="text-orange-400" />} value={plant.nextWateringDate} />
        </div>

        {/* Owner */}
        <p className="text-xs text-gray-500 mt-2">
          <span className="font-medium">{plant.userName}</span> – {plant.email}
        </p>

        {/* Actions */}
        <div className="mt-4 flex justify-between">
          <Link to={`/update/${plant._id}`} className="btn btn-sm btn-outline btn-success gap-2">
            <FaEdit />
            Update
          </Link>
          <button
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
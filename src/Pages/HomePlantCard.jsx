import React from "react";
import { FaInfoCircle, FaSeedling } from "react-icons/fa";
import { Link } from "react-router";

const HomePlantCard = ({ plant }) => {
  return (
    <div className="flex flex-col h-full bg-base-100 border border-green-200 shadow-md rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={plant.photo}
          alt={plant.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow p-4 space-y-2">
        {/* Title */}
        <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
          <FaSeedling className="text-green-500" />
          {plant.name}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-3">
          {plant.description}
        </p>

        {/* Button */}
        <div className="pt-2 mt-auto">
          <Link
            to={`/viewDetails/${plant._id}`}
            onClick={() => scrollTo(0, 0)}
            className="btn btn-sm btn-outline btn-primary w-full gap-2"
          >
            <FaInfoCircle />
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePlantCard;

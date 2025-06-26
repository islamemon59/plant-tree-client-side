import React from "react";
import { useLoaderData } from "react-router";
import {
  FaTint,
  FaCalendarCheck,
  FaLeaf,
  FaUser,
  FaSeedling,
} from "react-icons/fa";
import Info from "../Component/Info";

const ViewDetails = () => {
  const plant = useLoaderData();

  return (
    <div className="min-h-screen px-4 py-10 mt-28">
      {/* Main Plant Card */}
      <div className="w-full max-w-5xl mx-auto bg-secondary/20 border border-green-200 rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 transform transition-transform duration-300 hover:scale-[1.01]">
        {/* Plant Image */}
        <div className="h-80 md:h-full overflow-hidden">
          <img
            src={plant.photo}
            alt={`Photo of ${plant.name}`}
            className="w-full h-full object-cover transition duration-300 hover:scale-105"
          />
        </div>

        {/* Plant Details */}
        <div className="p-8 flex flex-col justify-between space-y-6 bg-secondary/20">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary flex items-center gap-3">
              <FaSeedling className="text-primary" />
              {plant.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">
              {plant.description}
            </p>

            <div className="mt-4 space-y-3 text-sm text-gray-800 dark:text-gray-300">
              <Info
                label="Category"
                icon={<FaLeaf className="text-green-500" />}
                value={plant.category}
              />
              <Info
                label="Care Level"
                icon={<FaSeedling className="text-yellow-500" />}
                value={plant.careLevel}
              />
              <Info
                label="Watering"
                icon={<FaTint className="text-blue-500" />}
                value={`Every ${plant.watering}`}
              />
              <Info
                label="Last Watered"
                icon={<FaCalendarCheck className="text-purple-500" />}
                value={plant.lastWateredDate}
              />
              <Info
                label="Next Watering"
                icon={<FaCalendarCheck className="text-orange-500" />}
                value={plant.nextWateringDate}
              />
              <Info label="Health" icon="🩺" value={plant.health} />
            </div>
          </div>

          <div className="pt-5 border-t text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <FaUser className="text-gray-600 dark:text-gray-300" />
            <span className="font-medium">{plant.userName}</span> —
            <a
              href={`mailto:${plant.email}`}
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              {plant.email}
            </a>
          </div>
        </div>
      </div>

      {/* Extra Sections */}
      <div className="max-w-5xl mx-auto mt-12 px-4 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-2">
            Plant Care Overview
          </h2>
          <p className="text-base text-base-content opacity-80">
            Stay informed with tips, status, and a summary to care for your
            plant better.
          </p>
        </div>

        {/* Summary */}
        <div className="bg-secondary/20 border border-base-300 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-success mb-2">
            🌿 Summary
          </h3>
          <ul className="list-disc list-inside text-sm text-base-content space-y-1">
            <li>
              <strong>Category:</strong> {plant.category}
            </li>
            <li>
              <strong>Care Level:</strong> {plant.careLevel}
            </li>
            <li>
              <strong>Watering:</strong> Every {plant.watering}
            </li>
            <li>
              <strong>Last Watered:</strong> {plant.lastWateredDate}
            </li>
            <li>
              <strong>Next Watering:</strong> {plant.nextWateringDate}
            </li>
            <li>
              <strong>Health:</strong> {plant.health}
            </li>
          </ul>
        </div>

        {/* Care Tips */}
        <div className="bg-secondary/20 border border-base-300 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-info mb-2">🛠 Care Tips</h3>
          <p className="text-sm text-base-content">
            Keep the plant in indirect sunlight. Don’t overwater. Repot if roots
            are growing out of the pot.
          </p>
        </div>

        {/* Watering Countdown (Static Placeholder) */}
        <div className="bg-secondary/20 border border-base-300 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-warning mb-2">
            ⏳ Watering Countdown
          </h3>
          <p className="text-sm text-base-content">
            Estimated <span className="font-medium text-warning">3 days</span>{" "}
            remaining until next watering.
          </p>
        </div>

        {/* Owner Notes */}
        <div className="bg-secondary/20 border border-base-300 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-base-content mb-2">
            📝 Owner Notes
          </h3>
          <p className="text-sm text-base-content italic opacity-90">
            This plant is part of my eco-friendly journey 🌱. It reminds me to
            stay grounded and patient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

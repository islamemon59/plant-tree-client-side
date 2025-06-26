import React from 'react';
import { useLoaderData } from 'react-router';
import { FaTint, FaCalendarCheck, FaLeaf, FaUser, FaSeedling } from "react-icons/fa";
import Info from '../Component/Info';

const ViewDetails = () => {
    const plant = useLoaderData()
    return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-lime-200 flex items-center justify-center p-6 rounded-2xl">
      <div className="backdrop-blur-md bg-white/60 border border-green-200 rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden hover:scale-105 transition duration-500">
        <div className="grid md:grid-cols-2">
          {/* Plant Image */}
          <div className="h-80 md:h-full overflow-hidden">
            <img
              src={plant.photo}
              alt={plant.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Details */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
                <FaSeedling className="text-green-500" /> {plant.name}
              </h1>
              <p className="text-gray-700 mt-2 italic">{plant.description}</p>

              <div className="mt-4 space-y-3 text-sm text-gray-800">
                <Info label="Category" icon={<FaLeaf className="text-green-500" />} value={plant.category} />
                <Info label="Care Level" icon={<FaSeedling className="text-amber-500" />} value={plant.careLevel} />
                <Info label="Watering" icon={<FaTint className="text-blue-400" />} value={`Every ${plant.watering}`} />
                <Info label="Last Watered" icon={<FaCalendarCheck className="text-purple-500" />} value={plant.lastWateredDate} />
                <Info label="Next Watering" icon={<FaCalendarCheck className="text-yellow-500" />} value={plant.nextWateringDate} />
                <Info label="Health" icon="🩺" value={plant.health} />
              </div>
            </div>

            <div className="mt-6 border-t pt-4 text-sm text-gray-600 flex items-center gap-2">
              <FaUser className="text-gray-600" />
              Owner: <span className="font-medium">{plant.userName}</span> – <a href={`mailto:${plant.email}`} className="underline">{plant.email}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ViewDetails;
import React, { useState } from "react";
import { useLoaderData } from "react-router";
import UserMyPlants from "./UserMyPlants";

const MyPlants = () => {
  const plants = useLoaderData();
  const [myPlants, setMyPlants] = useState([]);


  return (
    <div>
      <h1 className="text-center text-6xl font-bold text-green-800 py-6 mb-6">
        Your Added All Plants Here
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
        {plants.map((plant) => (
          <UserMyPlants
            key={plant._id}
            plant={plant}
            myPlants={myPlants}
            setMyPlants={setMyPlants}
          ></UserMyPlants>
        ))}
      </div>
    </div>
  );
};

export default MyPlants;

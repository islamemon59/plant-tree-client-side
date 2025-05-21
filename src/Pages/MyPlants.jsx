import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Context/CreateContex";
import UserMyPlants from "./UserMyPlants";

const MyPlants = () => {
  const { user } = use(AuthContext);
  const initialPlants = useLoaderData();
  const [myPlants, setMyPlants] = useState([]);
  // console.log(initialPlants);

  useEffect(() => {
    const userMatch = initialPlants.filter(
      (plant) => plant.email == user.email
    );
    console.log(userMatch);
    setMyPlants(userMatch);
  }, [initialPlants, user]);


  return (
    <div>
      <h1 className="text-center text-6xl font-bold text-green-800 py-6 mb-6">
        Your Added All Plants Here
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
        {myPlants.map((plant) => (
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

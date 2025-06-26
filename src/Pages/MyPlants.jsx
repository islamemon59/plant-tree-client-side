import React, { use, useEffect, useState } from "react";
import UserMyPlants from "./UserMyPlants";
import { AuthContext } from "../Context/CreateContex";
import Lottie from "lottie-react";
import monkey from "../monkey.json"

const MyPlants = () => {
  const { user } = use(AuthContext);
  const [myPlants, setMyPlants] = useState([]);

  useEffect(() => {
    fetch(`https://plant-tree-server.vercel.app/plant/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyPlants(data));
  }, [user]);

  return (
    <div>
      {myPlants.length == 0 ? (
        <div>
          <h1 className="text-6xl text-center">"You haven't added any data yet."</h1>
          <Lottie animationData={monkey}></Lottie>
        </div>
      ) : (
        <div>
          <h1 className="text-center text-6xl font-bold text-primary py-6 mb-6">
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
      )}
    </div>
  );
};

export default MyPlants;

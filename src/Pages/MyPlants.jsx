import React, { useEffect, useState } from "react";
import UserMyPlants from "./UserMyPlants";
import { AuthContext } from "../Context/CreateContex";
import Lottie from "lottie-react";
import monkey from "../monkey.json";
import Loading from "../Component/Loading";

const MyPlants = () => {
  const { user } = React.useContext(AuthContext);
  const [myPlants, setMyPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://plant-tree-server.vercel.app/plant/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyPlants(data)
        setLoading(false)
      });
  }, [user]);

  if(loading){
    return <Loading></Loading>
  }

  return (
    <div className="mt-28 px-4 max-w-7xl mx-auto">
      {myPlants.length === 0 ? (
        <div className="text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-semibold text-primary">
            You haven't added any plants yet.
          </h1>
          <div className="max-w-md mx-auto">
            <Lottie animationData={monkey} loop={true} />
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Your Added Plants
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base">
              Manage your personal plant collection below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {myPlants.map((plant) => (
              <UserMyPlants
                key={plant._id}
                plant={plant}
                myPlants={myPlants}
                setMyPlants={setMyPlants}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPlants;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/CreateContex";
import Lottie from "lottie-react";
import monkey from "../monkey.json";
import Loading from "../Component/Loading";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const MyPlants = () => {
  const { user } = React.useContext(AuthContext);
  const [myPlants, setMyPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  useEffect(() => {
    fetch(`https://plant-tree-server.vercel.app/plant/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyPlants(data);
        setLoading(false);
      });
  }, [user]);

  // 🔴 DELETE plant
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://plant-tree-server.vercel.app/plants/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMyPlants(myPlants.filter((plant) => plant._id !== id));
              Swal.fire("Deleted!", "Your plant has been deleted.", "success");
            }
          });
      }
    });
  };

  // ✏️ EDIT plant
  const handleEdit = (id) => {
    navigate(`/dashboard/updatePlant/${id}`);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mt-10 px-4 max-w-7xl mx-auto" data-aos="fade-up">
      {myPlants.length === 0 ? (
        <div className="text-center space-y-6" data-aos="fade-in">
          <h1 className="text-3xl md:text-5xl font-semibold text-primary">
            You haven't added any plants yet.
          </h1>
          <div className="max-w-md mx-auto">
            <Lottie animationData={monkey} loop={true} />
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center mb-10" data-aos="fade-down" data-aos-duration="1000">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Your Added Plants
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base">
              Manage your personal plant collection below.
            </p>
          </div>

          <div className="overflow-x-auto" data-aos="fade-up" data-aos-delay="200">
            <table className="table w-full">
              <thead>
                <tr className="bg-secondary text-primary dark:text-white">
                  <th>No</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Watering</th>
                  <th>Care Level</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {myPlants.map((plant, index) => (
                  <tr
                    key={plant._id}
                    className="hover:bg-base-200 transition duration-300"
                    data-aos="zoom-in"
                    data-aos-delay={index * 50}
                  >
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={plant.photo}
                        alt={plant.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td>{plant.name}</td>
                    <td>{plant.category}</td>
                    <td>{plant.watering}</td>
                    <td>{plant.careLevel}</td>
                    <td className="flex gap-2">
                      <button
                        onClick={() => handleEdit(plant._id)}
                        className="btn btn-sm btn-outline btn-info"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(plant._id)}
                        className="btn btn-sm btn-outline btn-error"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPlants;

import React, { use, useState } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../Context/CreateContex";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdatePlant = () => {
  const { user } = use(AuthContext);
  const plant = useLoaderData();
  const {
    _id,
    careLevel,
    category,
    description,
    health,
    name,
    photo,
    watering,
  } = plant;
  const [nextDate, setNextDate] = useState(plant.nextWateringDate);
  const [lastDate, setLastDate] = useState(plant.lastWateredDate);
  const handleUpdatePlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const updatedData = { ...data, lastDate, nextDate };
    console.log(updatedData);
    fetch(`http://localhost:3000/plants/${_id}`, {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(updatedData)
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount){

            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Successfully Updated",
              showConfirmButton: false,
              timer: 1500,
            });
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-5xl font-bold text-green-800 py-6">
        Update Your Plant Section
      </h1>
      <form onSubmit={handleUpdatePlant}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4">
            <label className="label">Plant Name</label>
            <input
              defaultValue={name}
              type="text"
              className="input w-full"
              name="name"
              placeholder="Plant Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4">
            <label className="label">Description</label>
            <textarea
              defaultValue={description}
              type="text"
              className="input w-full"
              name="description"
              placeholder="Description"
            />
          </fieldset>
          <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4">
            <label className="label">Category</label>
            <select
              className="input input-bordered w-full "
              name="category"
              id="day"
              defaultValue={category}
            >
              <option value="Succulent">Succulent</option>
              <option value="Fern">Fern</option>
              <option value="Flowering">Flowering</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4">
            <label className="label">Care Level</label>
            <select
              className="input input-bordered w-full "
              name="careLevel"
              id="day"
              defaultValue={careLevel}
            >
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Difficult">Difficult</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4">
            <label className="label">Watering Frequency</label>
            <input
              defaultValue={watering}
              type="text"
              className="input w-full"
              name="watering"
              placeholder="Watering Frequency"
            />
          </fieldset>
          <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4">
            <label className="label">Last Watered Date</label>
            <DatePicker
              value={lastDate}
              className="input input-bordered w-full"
              selected={lastDate}
              onChange={(date) => setLastDate(date.toLocaleDateString("en-CA"))}
            />
          </fieldset>
          <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4">
            <label className="label">Next Watering Date</label>
            <DatePicker
              className="input input-bordered w-full"
              value={nextDate}
              selected={nextDate}
              onChange={(date) => setNextDate(date.toLocaleDateString("en-CA"))}
            />
          </fieldset>
          <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4">
            <label className="label">Health Status</label>
            <input
              defaultValue={health}
              type="text"
              className="input w-full"
              name="health"
              placeholder="Enter coffee detail"
            />
          </fieldset>
          <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4">
            <label className="label">User Email</label>
            <input
              value={user?.email}
              type="text"
              className="input w-full"
              name="email"
            />
          </fieldset>
          <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4">
            <label className="label">User Name</label>
            <input
              value={user?.displayName}
              type="text"
              className="input w-full"
              name="userName"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4 my-6">
          <label className="label">Image</label>
          <input
            defaultValue={photo}
            type="text"
            className="input w-full"
            name="photo"
            placeholder="Enter photo URL"
          />
        </fieldset>
        <button type="submit" className="btn btn-success btn-block">
          Update Plant
        </button>
      </form>
    </div>
  );
};

export default UpdatePlant;

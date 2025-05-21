import React, { use, useState } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../Context/CreateContex";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const AddPlant = () => {
  const { user, plants, setPlants } = use(AuthContext);
  const [nextDate, setNextDate] = useState(new Date());
  const [lastDate, setLastDate] = useState(new Date());
  console.log(user);

  const handleAddPlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newData = Object.fromEntries(formData.entries());
    const nextWateringDate = nextDate.toLocaleDateString("en-CA");
    const lastWateredDate = lastDate.toLocaleDateString("en-CA");
    const newPlant = { ...newData, nextWateringDate, lastWateredDate };
    console.log(newPlant);

    fetch("http://localhost:3000/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setPlants([...plants, newPlant])
          Swal.fire({
            title: "Plant Successfully Added!",
            icon: "success",
            draggable: true,
          });
          form.reset()
        }
      });
  };

  return (
    <div>
      <h1 className="text-center md:text-5xl text-3xl font-semibold text-green-800 my-10">
        Add Your Favorite Plant
      </h1>
      <form onSubmit={handleAddPlant}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4">
            <label className="label">Plant Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              placeholder="Plant Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4">
            <label className="label">Description</label>
            <textarea
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
            >
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Difficult">Difficult</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4">
            <label className="label">Watering Frequency</label>
            <input
              type="text"
              className="input w-full"
              name="watering"
              placeholder="Watering Frequency"
            />
          </fieldset>
          <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4">
            <label className="label">Last Watered Date</label>
            <DatePicker
              className="input input-bordered w-full"
              selected={lastDate}
              onChange={(date) => setLastDate(date)}
            />
          </fieldset>
          <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4">
            <label className="label">Next Watering Date</label>
            <DatePicker
              className="input input-bordered w-full"
              selected={nextDate}
              onChange={(date) => setNextDate(date)}
            />
          </fieldset>
          <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4">
            <label className="label">Health Status</label>
            <input
              type="text"
              className="input w-full"
              name="health"
              placeholder="Enter coffee detail"
            />
          </fieldset>
          <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4">
            <label className="label">User Email</label>
            <input
              value={user.email}
              type="text"
              className="input w-full"
              name="email"
            />
          </fieldset>
          <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4">
            <label className="label">User Name</label>
            <input
              value={user.displayName}
              type="text"
              className="input w-full"
              name="userName"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-green-50 border-base-300 rounded-box border p-4 my-6">
          <label className="label">Image</label>
          <input
            type="text"
            className="input w-full"
            name="photo"
            placeholder="Enter photo URL"
          />
        </fieldset>
        <button type="submit" className="btn btn-success btn-block">
          Add Plant
        </button>
      </form>
    </div>
  );
};

export default AddPlant;

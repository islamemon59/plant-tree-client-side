import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../Context/CreateContex";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const AddPlant = () => {
  const { user, plants, setPlants } = useContext(AuthContext);
  const [nextDate, setNextDate] = useState(new Date());
  const [lastDate, setLastDate] = useState(new Date());

  const handleAddPlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newData = Object.fromEntries(formData.entries());
    const nextWateringDate = nextDate.toLocaleDateString("en-CA");
    const lastWateredDate = lastDate.toLocaleDateString("en-CA");
    const newPlant = { ...newData, nextWateringDate, lastWateredDate };

    fetch("https://plant-tree-server.vercel.app/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setPlants([...plants, newPlant]);
          Swal.fire({
            title: "Plant Successfully Added!",
            icon: "success",
            confirmButtonColor: "#22c55e",
          });
          form.reset();
          setNextDate(new Date());
          setLastDate(new Date());
        }
      });
  };

  return (
    <div className="mt-10 px-4 max-w-5xl mx-auto">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-primary mb-12">
        Add Your Favorite Plant
      </h1>
      <form onSubmit={handleAddPlant} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Plant Name */}
          <div className="form-control">
            <label className="label text-primary font-semibold">
              Plant Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter plant name"
              className="input input-bordered w-full placeholder:text-gray-400"
              required
            />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label text-primary font-semibold">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Write a brief description"
              className="textarea textarea-bordered w-full placeholder:text-gray-400"
              required
            ></textarea>
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label text-primary font-semibold">Category</label>
            <select
              name="category"
              className="select select-bordered w-full"
              defaultValue=""
              required
            >
              <option value="" disabled hidden>
                Select category
              </option>
              <option value="Succulent">Succulent</option>
              <option value="Fern">Fern</option>
              <option value="Flowering">Flowering</option>
            </select>
          </div>

          {/* Care Level */}
          <div className="form-control">
            <label className="label text-primary font-semibold">
              Care Level
            </label>
            <select
              name="careLevel"
              className="select select-bordered w-full"
              defaultValue=""
              required
            >
              <option value="" disabled hidden>
                Select care level
              </option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Difficult">Difficult</option>
            </select>
          </div>

          {/* Watering Frequency */}
          <div className="form-control">
            <label className="label text-primary font-semibold">
              Watering Frequency
            </label>
            <input
              type="text"
              name="watering"
              placeholder="e.g. Once a week"
              className="input input-bordered w-full placeholder:text-gray-400"
            />
          </div>

          {/* Health Status */}
          <div className="form-control">
            <label className="label text-primary font-semibold">
              Health Status
            </label>
            <input
              type="text"
              name="health"
              placeholder="e.g. Healthy"
              className="input input-bordered w-full placeholder:text-gray-400"
            />
          </div>

          {/* Last Watered Date */}
          <div className="form-control">
            <label className="label text-primary font-semibold">
              Last Watered Date
            </label>
            <DatePicker
              selected={lastDate}
              onChange={(date) => setLastDate(date)}
              className="input input-bordered w-full"
            />
          </div>

          {/* Next Watering Date */}
          <div className="form-control">
            <label className="label text-primary font-semibold">
              Next Watering Date
            </label>
            <DatePicker
              selected={nextDate}
              onChange={(date) => setNextDate(date)}
              className="input input-bordered w-full"
            />
          </div>

          {/* User Email */}
          <div className="form-control">
            <label className="label text-primary font-semibold">
              User Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              readOnly
              className="input input-bordered w-full bg-gray-100 text-black"
            />
          </div>

          {/* User Name */}
          <div className="form-control">
            <label className="label text-primary font-semibold">
              User Name
            </label>
            <input
              type="text"
              name="userName"
              value={user.displayName}
              readOnly
              className="input input-bordered w-full bg-gray-100 text-black"
            />
          </div>

          {/* Image URL */}
          <div className="form-control md:col-span-2">
            <label className="label text-primary font-semibold">
              Plant Image URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Paste image URL here"
              className="input input-bordered w-full placeholder:text-gray-400"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full mt-6">
          Add Plant
        </button>
      </form>
    </div>
  );
};

export default AddPlant;

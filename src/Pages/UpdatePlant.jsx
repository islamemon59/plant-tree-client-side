import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../Context/CreateContex";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdatePlant = () => {
  const { user } = useContext(AuthContext);
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
    lastWateredDate,
    nextWateringDate,
  } = plant;

  // Keep initial states as Date objects or new Date()
  const [lastDate, setLastDate] = useState(new Date(lastWateredDate));
  const [nextDate, setNextDate] = useState(new Date(nextWateringDate));

  const handleUpdatePlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Keep date strings in YYYY-MM-DD format
    const updatedData = {
      ...data,
      lastWateredDate: lastDate.toISOString().slice(0, 10),
      nextWateringDate: nextDate.toISOString().slice(0, 10),
    };

    fetch(`https://plant-tree-server.vercel.app/plants/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
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
    <div className="mt-28 px-4 max-w-5xl mx-auto">
      <h1 className="text-center text-5xl font-bold text-primary py-6">
        Update Your Plant Section
      </h1>
      <form onSubmit={handleUpdatePlant} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label text-primary font-semibold">
              Plant Name
            </label>
            <input
              defaultValue={name}
              type="text"
              className="input input-bordered w-full placeholder:text-gray-500"
              name="name"
              placeholder="Plant Name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-primary font-semibold">
              Description
            </label>
            <textarea
              defaultValue={description}
              className="textarea textarea-bordered w-full placeholder:text-gray-500"
              name="description"
              placeholder="Description"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-primary font-semibold">Category</label>
            <select
              className="select select-bordered w-full text-gray-500"
              name="category"
              defaultValue={category}
              required
            >
              <option disabled value="">
                Select category
              </option>
              <option value="Succulent">Succulent</option>
              <option value="Fern">Fern</option>
              <option value="Flowering">Flowering</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label text-primary font-semibold">
              Care Level
            </label>
            <select
              className="select select-bordered w-full text-gray-500"
              name="careLevel"
              defaultValue={careLevel}
              required
            >
              <option disabled value="">
                Select care level
              </option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Difficult">Difficult</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label text-primary font-semibold">
              Watering Frequency
            </label>
            <input
              defaultValue={watering}
              type="text"
              className="input input-bordered w-full placeholder:text-gray-500"
              name="watering"
              placeholder="Watering Frequency"
            />
          </div>
          <div className="form-control">
            <label className="label text-primary font-semibold">
              Health Status
            </label>
            <input
              defaultValue={health}
              type="text"
              className="input input-bordered w-full placeholder:text-gray-500"
              name="health"
              placeholder="Health Status"
            />
          </div>
          <div className="form-control">
            <label className="label text-primary font-semibold">
              Last Watered Date
            </label>
            <DatePicker
              selected={lastDate}
              onChange={setLastDate}
              className="input input-bordered w-full text-black"
              dateFormat="yyyy-MM-dd"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-primary font-semibold">
              Next Watering Date
            </label>
            <DatePicker
              selected={nextDate}
              onChange={setNextDate}
              className="input input-bordered w-full text-black"
              dateFormat="yyyy-MM-dd"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-primary font-semibold">
              User Email
            </label>
            <input
              value={user?.email || ""}
              readOnly
              type="email"
              className="input input-bordered w-full bg-gray-100 text-black"
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label text-primary font-semibold">
              User Name
            </label>
            <input
              value={user?.displayName || ""}
              readOnly
              type="text"
              className="input input-bordered w-full bg-gray-100 text-black"
              name="userName"
            />
          </div>
          <div className="form-control md:col-span-2">
            <label className="label text-primary font-semibold">Image</label>
            <input
              defaultValue={photo}
              type="text"
              className="input input-bordered w-full placeholder:text-gray-500"
              name="photo"
              placeholder="Enter photo URL"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success btn-block mt-6">
          Update Plant
        </button>
      </form>
    </div>
  );
};

export default UpdatePlant;

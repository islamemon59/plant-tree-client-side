import React, { use, useState } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../Context/CreateContex";

const AddPlant = () => {
  const {user} = use(AuthContext)
  console.log(user);
      const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <h1 className="text-center md:text-5xl text-3xl font-semibold text-green-500 my-10">
        Add Your Favorite Plant
      </h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Plant Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              placeholder="Plant Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Description</label>
            <input
              type="text"
              className="input w-full"
              name="description"
              placeholder="Description"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Category</label>
            <select className="input input-bordered w-full " name="category" id="day">
              <option value="sunday">Succulent</option>
              <option value="monday">Fern</option>
              <option value="tuesday">Flowering</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Care Level</label>
            <select className="input input-bordered w-full " name="careLevel" id="day">
              <option value="sunday">Easy</option>
              <option value="monday">Moderate</option>
              <option value="tuesday">Difficult</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Watering Frequency</label>
              <DatePicker
                className="input input-bordered w-full"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Last Watered Date</label>
            <input
              type="text"
              className="input w-full"
              name="details"
              placeholder="Enter coffee detail"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Next Watering Date</label>
            <input
              type="text"
              className="input w-full"
              name="details"
              placeholder="Enter coffee detail"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Health Status</label>
            <input
              type="text"
              className="input w-full"
              name="health"
              placeholder="Enter coffee detail"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">User Email</label>
            <input
              type="text"
              className="input w-full"
              name="details"
              placeholder="Enter coffee detail"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">User Name</label>
            <input
              type="text"
              className="input w-full"
              name="details"
              placeholder="Enter coffee detail"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-6">
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

import React from "react";

const AllPlants = () => {
  return (
    <div>
      <h1 className="text-center md:text-5xl text-3xl font-semibold text-green-500 my-10">
        All Plants Collection Here
      </h1>
      <div className="overflow-x-auto py-6">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Name</th>
              <th>Category</th>
              <th>Watering Frequency</th>
              <th>Auction</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label></label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar"></div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPlants;

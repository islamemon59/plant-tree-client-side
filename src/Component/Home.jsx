import React from "react";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

<section className="my-20">
<div className="card lg:card-side bg-base-100">
  <figure>
    <img
      src="transparent.png"
      alt="Album" />
  </figure>
  <div className="card-body text-green-600 mt-6">
    <h2 className="card-title md:text-5xl text-4xl">Whispers of the Earth</h2>
    <p className="md:text-xl">Planting trees is nature’s quiet way of building a louder, greener future.</p>
  </div>
</div>
</section>

      <section>
        <div className="my-20 p-6 bg-base-200 rounded-2xl shadow-md text-green-600">
          <h2 className="text-2xl font-bold mb-4">
            🌱 Top Plant Care Mistakes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>
              <strong>Overwatering or underwatering:</strong> Balance is key—too
              much or too little water harms roots.
            </li>
            <li>
              <strong>Planting too deep:</strong> Keep the root flare visible at
              soil level.
            </li>
            <li>
              <strong>Piling mulch on trunk:</strong> Mulch should stay away
              from the tree’s base to prevent rot.
            </li>
            <li>
              <strong>Ignoring pests/diseases:</strong> Check regularly for leaf
              damage or wilting.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="my-20 p-6 bg-base-100 border border-base-300 rounded-2xl shadow-md text-green-600">
          <h2 className="text-2xl font-bold mb-4">
            🌳 Beginner-Friendly Trees to Plant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-base-200 p-4">
              <h3 className="font-semibold text-lg">Maple Tree</h3>
              <p>Fast-growing with vibrant foliage, ideal for shade.</p>
            </div>
            <div className="card bg-base-200 p-4">
              <h3 className="font-semibold text-lg">Dogwood</h3>
              <p>Low maintenance and known for beautiful spring flowers.</p>
            </div>
            <div className="card bg-base-200 p-4">
              <h3 className="font-semibold text-lg">Crape Myrtle</h3>
              <p>Perfect for warm climates, with colorful summer blooms.</p>
            </div>
            <div className="card bg-base-200 p-4">
              <h3 className="font-semibold text-lg">Eastern Redbud</h3>
              <p>Great for small yards with striking pink flowers in spring.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

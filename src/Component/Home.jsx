import React from "react";
import Banner from "./Banner";
import { FaSeedling } from "react-icons/fa";
import { FaTree, FaRecycle, FaWater, FaWind } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <section className="my-20">
        <div className="card lg:card-side bg-base-100">
          <figure>
            <img src="transparent.png" alt="Album" />
          </figure>
          <div className="card-body text-green-600 mt-6">
            <h2 className="card-title md:text-5xl text-4xl">
              Whispers of the Earth
            </h2>
            <p className="md:text-xl">
              Planting trees is nature’s quiet way of building a louder, greener
              future.
            </p>
          </div>
        </div>
      </section>

    <section className="relative bg-white overflow-hidden py-20">
      {/* Background Shape */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-5xl font-bold text-green-800 leading-tight flex items-center justify-center lg:justify-start gap-3">
            <FaTree className="text-green-600 text-6xl" />
            Let's Make Earth Greener
          </h1>
          <p className="mt-6 text-green-700 text-lg">
            Every tree you plant brings us closer to a sustainable future. Join the movement to restore balance to our environment—one tree at a time.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="btn btn-success btn-lg">Start Planting</button>
            <button className="btn btn-outline btn-success btn-lg">Our Mission</button>
          </div>
        </div>

        {/* Image */}
        <div className="max-w-md w-full">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4275/4275626.png"
            alt="Planting tree illustration"
            className="w-full drop-shadow-xl"
          />
        </div>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-800">Why Plant Trees?</h2>
        <p className="mt-4 text-green-600">
          Trees are essential to life on Earth. Here’s why they matter.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-16">
        {[
          {
            icon: <FaTree className="text-green-700 text-4xl mx-auto mb-4" />,
            title: "Clean Air",
            description: "Trees absorb pollutants and provide us with fresh oxygen.",
          },
          {
            icon: <FaRecycle className="text-green-700 text-4xl mx-auto mb-4" />,
            title: "Reduce Waste",
            description: "Trees help manage waste naturally by cycling nutrients.",
          },
          {
            icon: <FaWater className="text-green-700 text-4xl mx-auto mb-4" />,
            title: "Water Filtration",
            description: "They filter rainwater and protect our waterways.",
          },
          {
            icon: <FaWind className="text-green-700 text-4xl mx-auto mb-4" />,
            title: "Climate Balance",
            description: "Trees help regulate climate and reduce carbon footprint.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="card bg-green-50 p-6 text-center shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:bg-green-100"
          >
            {item.icon}
            <h3 className="font-bold text-lg text-green-800">{item.title}</h3>
            <p className="text-green-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Home;

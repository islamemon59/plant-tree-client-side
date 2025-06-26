// import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import {
  FaTree,
  FaRecycle,
  FaWater,
  FaWind,
  FaLeaf,
  FaStar,
  FaBookOpen,
  FaTags,
  FaEnvelopeOpenText,
  FaPenNib,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import HomePlantCard from "../Pages/HomePlantCard";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const Home = () => {
  const initialPlants = useLoaderData();

  useEffect(() => {
    themeChange(false);
  }, []);

  const benefits = [
    {
      icon: <FaTree className="text-primary text-4xl mx-auto mb-4" />,
      title: "Clean Air",
      description: "Trees absorb pollutants and provide us with fresh oxygen.",
    },
    {
      icon: <FaRecycle className="text-primary text-4xl mx-auto mb-4" />,
      title: "Reduce Waste",
      description: "Trees help manage waste naturally by cycling nutrients.",
    },
    {
      icon: <FaWater className="text-primary text-4xl mx-auto mb-4" />,
      title: "Water Filtration",
      description: "They filter rainwater and protect our waterways.",
    },
    {
      icon: <FaWind className="text-primary text-4xl mx-auto mb-4" />,
      title: "Climate Balance",
      description: "Trees help regulate climate and reduce carbon footprint.",
    },
  ];

  return (
    <div className="space-y-24 mt-28">
      {/* Banner */}
      <Banner />

      {/* New Arrivals */}
      <section className="px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <FaLeaf className="text-primary text-3xl" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
              New Arrivals
            </h1>
          </div>
          <p className="text-xl text-gray-500">
            Discover the latest additions to our green family
          </p>
          <div className="mt-4 h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {initialPlants.map((plant) => (
            <HomePlantCard key={plant._id} plant={plant} />
          ))}
        </div>
      </section>

      {/* Highlight Section */}
      <section className="px-4 max-w-6xl mx-auto">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="transparent.png"
              alt="Nature Quote"
              className="transition duration-600 hover:scale-105"
            />
          </figure>
          <div className="card-body mt-6">
            <h2 className="card-title text-primary font-bold text-4xl md:text-5xl text-center">
              Whispers of the Earth
            </h2>
            <p className="text-xl text-center text-gray-500">
              Planting trees is nature’s quiet way of building a louder, greener
              future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative bg-base-100 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-[600px] h-[600px] bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left max-w-xl">
            <h1 className="text-5xl font-bold text-primary leading-tight flex items-center gap-3">
              <FaTree className="text-green-600 text-4xl md:text-5xl" />
              Let's Make Earth Greener
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              Every tree you plant brings us closer to a sustainable future.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/addPlant" className="btn btn-primary btn-lg">
                Start Planting
              </Link>
              <Link
                to="/aboutUs"
                className="btn btn-outline btn-primary btn-lg"
              >
                Our Mission
              </Link>
            </div>
          </div>
          <div className="max-w-md w-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4275/4275626.png"
              alt="Planting tree illustration"
              className="w-full drop-shadow-xl hover:scale-105 transition duration-600"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-base-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Why Plant Trees?</h2>
          <p className="text-xl mt-4 text-gray-500">
            Trees are essential to life on Earth. Here’s why they matter.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-16">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="card bg-secondary p-6 text-center shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
            >
              {item.icon}
              <h3 className="font-bold text-lg text-primary">{item.title}</h3>
              <p className="text-base-content">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <FaStar className="text-yellow-500 text-3xl" />
            <h2 className="text-4xl font-bold text-primary">
              Top Rated Plants
            </h2>
          </div>
          <p className="text-xl text-gray-500">
            Our community’s favorite selections, curated with care.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {initialPlants.slice(0, 4).map((plant) => (
            <HomePlantCard key={plant._id} plant={plant} />
          ))}
        </div>
      </section>

      {/* Blog/Offer Section */}
      <section className="px-4 max-w-6xl mx-auto bg-secondary rounded-xl py-16 shadow">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-bold text-primary flex items-center gap-2">
              <FaBookOpen /> Green Tips & Articles
            </h2>
            <p className="text-xl text-primary">
              Explore our latest blog articles and gardening guides.
            </p>
          </div>
          <Link to="/allPlants" className="btn btn-outline btn-primary btn-lg">
            Read Blog
          </Link>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="px-4 max-w-6xl mx-auto py-20">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <FaPenNib className="text-primary text-3xl" />
            <h2 className="text-4xl font-bold text-primary">
              Latest Blog Posts
            </h2>
          </div>
          <p className="text-xl text-gray-500">
            Fresh insights, ideas, and inspiration for your green lifestyle.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Replace with mapped blog cards in real app */}
          <div className="bg-secondary/40 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-2">
              5 Easy Plants for Beginners
            </h3>
            <p className="text-gray-600">
              Kickstart your gardening journey with these low-maintenance
              favorites.
            </p>
            <Link
              to="/allPlant"
              className="text-primary font-medium mt-4 inline-block hover:underline"
            >
              Read More →
            </Link>
          </div>
          <div className="bg-secondary/40 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Sustainable Gardening Tips
            </h3>
            <p className="text-gray-600">
              Discover how to garden in harmony with the environment.
            </p>
            <Link
              to="/allPlant"
              className="text-primary font-medium mt-4 inline-block hover:underline"
            >
              Read More →
            </Link>
          </div>
          <div className="bg-secondary/40 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-2">
              The Importance of Native Plants
            </h3>
            <p className="text-gray-600">
              Learn why native plants matter for biodiversity and soil health.
            </p>
            <Link
              to="/allPlant"
              className="text-primary font-medium mt-4 inline-block hover:underline"
            >
              Read More →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="shadow-xl bg-secondary/30 py-20 px-6 md:px-12 text-center rounded">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Stay Updated with Green News
        </h2>
        <p className="text-xl mb-6 text-gray-500">
          Get eco tips, new arrivals & updates delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full bg-white placeholder:text-gray-500"
          />
          <Link to="/login" className="btn btn-primary">
            <FaEnvelopeOpenText className="mr-2" /> Subscribe
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

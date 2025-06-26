/* eslint-disable no-unused-vars */
import Banner from "./Banner";
import {
  FaTree,
  FaRecycle,
  FaWater,
  FaWind,
  FaLeaf,
  FaStar,
  FaBookOpen,
  FaEnvelopeOpenText,
  FaPenNib,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import HomePlantCard from "../Pages/HomePlantCard";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { motion } from "framer-motion";

const Home = () => {
  const initialPlants = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
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

  // Variants for fade + slide up animation on text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Variants for staggered container animation
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  return (
    <div className="space-y-28 mt-28">
      {/* Banner */}
      <motion.div initial="hidden" animate="visible" variants={textVariants}>
        <Banner />
      </motion.div>

      {/* New Arrivals */}
      <motion.section
        className="px-4 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <FaLeaf className="text-primary text-3xl" />
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold text-primary"
              variants={textVariants}
            >
              New Arrivals
            </motion.h1>
          </div>
          <motion.p className="text-xl text-gray-500" variants={textVariants}>
            Discover the latest additions to our green family
          </motion.p>
          <div className="mt-4 h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {initialPlants.map((plant) => (
            <HomePlantCard key={plant._id} plant={plant} />
          ))}
        </div>
      </motion.section>

      {/* Highlight Section */}
      <motion.section
        className="px-4 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="card lg:card-side bg-base-100">
          <figure>
            <img
              src="transparent.png"
              alt="Nature Quote"
              className="transition duration-600 hover:scale-105"
            />
          </figure>
          <div className="card-body mt-6">
            <motion.h2
              className="card-title text-primary font-bold text-4xl md:text-5xl text-center"
              variants={textVariants}
            >
              Whispers of the Earth
            </motion.h2>
            <motion.p
              className="text-xl text-center text-gray-500"
              variants={textVariants}
            >
              Planting trees is nature’s quiet way of building a louder, greener
              future.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="relative bg-base-100 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-[600px] h-[600px] bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left max-w-xl">
            <motion.h1
              className="text-5xl font-bold text-primary leading-tight flex items-center gap-3"
              variants={textVariants}
            >
              <FaTree className="text-green-600 text-4xl md:text-5xl" />
              Let's Make Earth Greener
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-gray-500"
              variants={textVariants}
            >
              Every tree you plant brings us closer to a sustainable future.
            </motion.p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/dashboard/addPlant" className="btn btn-primary btn-lg">
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
      </motion.section>

      {/* Benefits */}
      <motion.section
        className="bg-base-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12" variants={textVariants}>
          <h2 className="text-4xl font-bold text-primary">Why Plant Trees?</h2>
          <p className="text-xl mt-4 text-gray-500">
            Trees are essential to life on Earth. Here’s why they matter.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-16">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="card bg-secondary p-6 text-center shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {item.icon}
              <motion.h3
                className="font-bold text-lg text-primary"
                variants={textVariants}
              >
                {item.title}
              </motion.h3>
              <motion.p className="text-base-content" variants={textVariants}>
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Section */}
      <motion.section
        className="px-4 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <FaStar className="text-yellow-500 text-3xl" />
            <motion.h2
              className="text-4xl font-bold text-primary"
              variants={textVariants}
            >
              Top Rated Plants
            </motion.h2>
          </div>
          <motion.p className="text-xl text-gray-500" variants={textVariants}>
            Our community’s favorite selections, curated with care.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {initialPlants.slice(0, 4).map((plant) => (
            <HomePlantCard key={plant._id} plant={plant} />
          ))}
        </div>
      </motion.section>

      {/* Blog/Offer Section */}
      <motion.section
        className="px-4 max-w-6xl mx-auto bg-secondary rounded-xl py-16 shadow"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            className="space-y-4 text-center md:text-left"
            variants={textVariants}
          >
            <h2 className="text-4xl font-bold text-primary flex items-center gap-2">
              <FaBookOpen /> Green Tips & Articles
            </h2>
            <p className="text-xl text-primary">
              Explore our latest blog articles and gardening guides.
            </p>
          </motion.div>
          <Link to="/allPlants" className="btn btn-outline btn-primary btn-lg">
            Read Blog
          </Link>
        </div>
      </motion.section>

      {/* Latest Blogs Section */}
      <motion.section
        className="px-4 max-w-6xl mx-auto py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <FaPenNib className="text-primary text-3xl" />
            <motion.h2
              className="text-4xl font-bold text-primary"
              variants={textVariants}
            >
              Latest Blog Posts
            </motion.h2>
          </div>
          <motion.p className="text-xl text-gray-500" variants={textVariants}>
            Fresh insights, ideas, and inspiration for your green lifestyle.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Replace with mapped blog cards in real app */}
          {[
            {
              title: "5 Easy Plants for Beginners",
              desc: "Kickstart your gardening journey with these low-maintenance favorites.",
            },
            {
              title: "Sustainable Gardening Tips",
              desc: "Discover how to garden in harmony with the environment.",
            },
            {
              title: "The Importance of Native Plants",
              desc: "Learn why native plants matter for biodiversity and soil health.",
            },
          ].map(({ title, desc }, idx) => (
            <motion.div
              key={idx}
              className="bg-secondary/40 p-6 rounded-lg shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <motion.h3
                className="text-2xl font-bold text-primary mb-2"
                variants={textVariants}
              >
                {title}
              </motion.h3>
              <motion.p className="text-gray-600" variants={textVariants}>
                {desc}
              </motion.p>
              <Link
                to="/dashboard/allPlants"
                className="text-primary font-medium mt-4 inline-block hover:underline"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        className="shadow-xl bg-secondary/30 py-20 px-6 md:px-12 text-center rounded"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
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
      </motion.section>
    </div>
  );
};

export default Home;

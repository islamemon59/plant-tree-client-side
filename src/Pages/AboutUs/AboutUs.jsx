import React, { useEffect } from "react";
import {
  FaLeaf,
  FaHandsHelping,
  FaGlobeAsia,
  FaRecycle,
  FaBolt,
  FaChartLine,
} from "react-icons/fa";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <section
      className="text-gray-800 py-16 px-4 md:px-16 mt-20"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl font-bold text-center text-primary mb-6"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          About Help Nest
        </h2>
        <p
          className="text-center text-lg text-gray-500 mb-12"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Help Nest is a green movement driven by compassion and commitment. Our
          goal is to plant trees, protect biodiversity, and build a cleaner,
          healthier planet for future generations.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {/* Mission */}
          <div
            className="p-6 rounded-2xl shadow hover:shadow-xl transition bg-secondary"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="flex justify-center mb-4 text-primary text-4xl">
              <FaLeaf />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Our Mission
            </h3>
            <p className="text-gray-500">
              We aim to plant thousands of trees across deforested regions,
              educate communities, and inspire green action through
              collaborative efforts.
            </p>
          </div>

          {/* Vision */}
          <div
            className="p-6 rounded-2xl shadow hover:shadow-xl transition bg-secondary"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="flex justify-center mb-4 text-primary text-4xl">
              <FaGlobeAsia />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Our Vision
            </h3>
            <p className="text-gray-500">
              To see a world where every barren land is transformed into a
              forest, and every individual becomes a guardian of nature.
            </p>
          </div>

          {/* Commitment */}
          <div
            className="p-6 rounded-2xl shadow hover:shadow-xl transition bg-secondary"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="flex justify-center mb-4 text-primary text-4xl">
              <FaHandsHelping />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">
              Our Commitment
            </h3>
            <p className="text-gray-500">
              From awareness campaigns to tree planting drives, we stay rooted
              in action, transparency, and long-term sustainability.
            </p>
          </div>
        </div>

        {/* Core Initiatives */}
        <div className="mt-20">
          <h3
            className="text-3xl font-bold text-primary text-center mb-10"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Our Core Initiatives
          </h3>
          <ul className="space-y-10 max-w-4xl mx-auto">
            <li
              className="flex items-start gap-4"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <span className="text-primary text-3xl">
                <FaBolt />
              </span>
              <div>
                <h4 className="text-xl font-semibold text-primary mb-1">
                  Clean Energy Advocacy
                </h4>
                <p className="text-gray-500">
                  We collaborate with local innovators to promote sustainable
                  energy use and reduce carbon footprints.
                </p>
              </div>
            </li>
            <li
              className="flex items-start gap-4"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <span className="text-primary text-3xl">
                <FaRecycle />
              </span>
              <div>
                <h4 className="text-xl font-semibold text-primary mb-1">
                  Eco Recycling Drives
                </h4>
                <p className="text-gray-500">
                  Our campaigns encourage communities to adopt recycling and
                  reduce single-use plastic dependency.
                </p>
              </div>
            </li>
            <li
              className="flex items-start gap-4"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <span className="text-primary text-3xl">
                <FaChartLine />
              </span>
              <div>
                <h4 className="text-xl font-semibold text-primary mb-1">
                  Impact Analytics
                </h4>
                <p className="text-gray-500">
                  We track every tree, campaign, and partner impact to ensure
                  real, measurable progress.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div
          className="mt-20 text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h4 className="text-2xl font-semibold text-primary mb-4">
            Join Us in Planting Hope
          </h4>
          <p className="text-gray-500 max-w-2xl mx-auto mb-6">
            Whether you're a student, a nature lover, or a company, you can
            become a part of this green journey. Every leaf we grow is a step
            toward healing the planet.
          </p>
          <Link
            to="/dashboard/addPlant"
            className="btn btn-primary text-primary-content px-6 py-3 shadow hover:scale-105 transition"
          >
            Become a Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
}

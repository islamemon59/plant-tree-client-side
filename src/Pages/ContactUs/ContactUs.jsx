// ContactUs.jsx

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="bg-white py-16 px-4 md:px-16 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-primary">
          Get in Touch
        </h2>
        <p className="text-center text-lg mt-2 mb-12 text-primary-content">
          Have a question, suggestion, or want to volunteer? We're here to help!
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-secondary p-8 rounded-2xl shadow-md">
            <form className="space-y-6">
              <div>
                <label className="block mb-1 font-semibold text-primary-content">Name</label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold text-primary-content">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold text-primary-content">Message</label>
                <textarea
                  placeholder="Type your message here..."
                  className="textarea textarea-bordered w-full h-32"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-base">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-2xl mt-1 text-primary" />
              <div>
                <h4 className="font-bold text-primary-content">Address</h4>
                <p>123 Green Lane, Treeville, Earth 4000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-2xl mt-1 text-primary" />
              <div>
                <h4 className="font-bold text-primary-content">Phone</h4>
                <p>+880 123 456 789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-2xl mt-1 text-primary" />
              <div>
                <h4 className="font-bold text-primary-content">Email</h4>
                <p>contact@helpnest.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

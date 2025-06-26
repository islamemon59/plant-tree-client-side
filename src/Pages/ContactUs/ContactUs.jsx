// ContactUs.jsx

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSeedling,
  FaHandsHelping,
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="py-16 px-4 md:px-16 text-gray-800 mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-primary">
          Get in Touch
        </h2>
        <p className="text-center text-lg mt-2 mb-12 text-gray-500">
          Have a question, suggestion, or want to volunteer? We're here to help!
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-secondary p-8 rounded-2xl shadow-md">
            <form className="space-y-6">
              <div>
                <label className="block mb-1 font-semibold text-primary">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="input input-bordered w-full placeholder:text-gray-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold text-primary">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full placeholder:text-gray-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold text-primary">
                  Message
                </label>
                <textarea
                  placeholder="Type your message here..."
                  className="textarea textarea-bordered w-full h-32 placeholder:text-gray-500"
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
                <h4 className="font-bold text-primary">Address</h4>
                <p className="text-gray-500">
                  123 Green Lane, Treeville, Earth 4000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-2xl mt-1 text-primary" />
              <div>
                <h4 className="font-bold text-primary">Phone</h4>
                <p className="text-gray-500">+880 123 456 789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-2xl mt-1 text-primary" />
              <div>
                <h4 className="font-bold text-primary">Email</h4>
                <p className="text-gray-500">contact@helpnest.org</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="text-2xl mt-1 text-primary" />
              <div>
                <h4 className="font-bold text-primary">Office Hours</h4>
                <p className="text-gray-500">
                  Sunday - Thursday: 9:00 AM – 6:00 PM
                </p>
                <p className="text-gray-500">Friday & Saturday: Closed</p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="font-bold text-primary mb-2">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-primary hover:text-green-600 text-xl"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-green-600 text-xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-green-600 text-xl"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>

            <div className="pt-10 border-t">
              <h4 className="text-xl font-bold text-primary mb-2">
                Why Contact Us?
              </h4>
              <p className="text-gray-500">
                Whether you're interested in joining our green initiative,
                organizing a tree-planting event, or just want to say hello —
                our team is here to listen and support your journey.
              </p>
            </div>

            <div className="pt-10 border-t">
              <h4 className="text-xl font-bold text-primary mb-2">
                Get Involved
              </h4>
              <div className="text-gray-500 space-y-2">
                <p>
                  <FaSeedling className="inline mr-2 text-green-500" />
                  Start your own community plantation drive with our support.
                </p>
                <p>
                  <FaHandsHelping className="inline mr-2 text-yellow-500" />
                  Partner with us for CSR, workshops, or sustainability
                  programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

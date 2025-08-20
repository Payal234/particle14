import React from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* 🔵 Background Glow */}
      <div className="absolute inset-0">
        <div className="w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[200px] absolute -top-40 -left-40"></div>
        <div className="w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[180px] absolute bottom-0 right-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white-800">
          Contact us
        </h2>
         <div className="w-24 h-1 bg-blue-500 mx-auto mb-3 rounded-full shadow-lg shadow-blue-500/50 "></div>
          <span className="px-4 py-1 text-sm font-semibold bg-blue-600/30 text-blue-300 rounded-full">
            24/7 Let’s Work Together
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-6">
            Any Questions Rising? <br /> We are All Here.
          </h2>
          <p className="mt-4 text-gray-400">
            Whether you have a question, need assistance, or want to start a new project,
            our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-black/60 border border-gray-800 rounded-2xl shadow-lg p-6">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-black border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-black border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-black border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
              <textarea
                placeholder="Message"
                rows="3"
                className="w-full bg-black border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-blue-500/40 transition-all duration-300"
              >
                Submit Now
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* CEO Info */}
            <div className="bg-black/60 border border-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-400">CEO: Mr. Neeraj Kumar</h3>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white-800" />
                <span>+91 7078774692</span>
              </div>
              <div className="flex gap-4 mt-3">
                <a href="https://www.instagram.com/dj_mobley_?igsh=MWM1ZHoxajcyMnc3MQ==" target="_blank" rel="noreferrer">
                  <Instagram className="w-4 h-4 text-gray-400 hover:text-pink-500" />
                </a>
                <a href="https://www.linkedin.com/in/neeraj-kumar-50a4a522b" target="_blank" rel="noreferrer">
                  <Linkedin className="w-4 h-4 text-gray-400 hover:text-blue-500" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61575061542138" target="_blank" rel="noreferrer">
                  <Facebook className="w-4 h-4 text-gray-400 hover:text-blue-600" />
                </a>
              </div>
            </div>

            {/* CTO Info */}
            <div className="bg-black/60 border border-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-400">CTO: Uday Alawa</h3>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white-800" />
                <span>+91 89649 39950</span>
              </div>
              <div className="flex gap-4 mt-3">
                <a href="https://www.instagram.com/uday.alawa" target="_blank" rel="noreferrer">
                  <Instagram className="w-4 h-4 text-gray-400 hover:text-pink-500" />
                </a>
                <a href="https://www.linkedin.com/in/udayalawa" target="_blank" rel="noreferrer">
                  <Linkedin className="w-4 h-4 text-gray-400 hover:text-blue-500" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100081102293843" target="_blank" rel="noreferrer">
                  <Facebook className="w-4 h-4 text-gray-400 hover:text-blue-600" />
                </a>
              </div>
            </div>

            {/* General Email & Address */}
            <div className="bg-black/60 border border-gray-800 rounded-2xl p-6 shadow-lg space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>help@company.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+91 7078774692</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>213 Apollo Premier, Vijay Nagar Indore-452001. India.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

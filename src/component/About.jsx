import React from "react";

const About = () => {
  return (
    <section className="relative bg-black text-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden ">
      {/* Glow Effect (Blue Shadow) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-40 
        bg-gradient-to-r from-blue-500/20 via-blue-600/30 to-blue-500/20 
        rounded-full blur-3xl opacity-40 "
      ></div>

      {/* Title */}
      <div className="relative max-w-7xl mx-auto text-center mb-20 z-10 mt-5">
        <h2 className="text-3xl md:text-4xl font-bold text-white-800">
          About Us
        </h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full shadow-lg shadow-blue-500/50 "></div>
      </div>

      {/* Content */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10  ">
        {/* Left Content */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-400">
            Who We Are
          </h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            We’re a passionate team of innovators and designers dedicated to
            crafting user-centric digital experiences.{" "}
            <span className="font-semibold text-white">
              Whether it is a bold website or a detailed app interface,
            </span>{" "}
            we’re here to make your ideas shine.
          </p>
        </div>

        {/* Right Quote Box */}
        <div className="bg-gray-900/70 backdrop-blur-md text-white p-6 md:p-10 rounded-2xl shadow-lg shadow-blue-500/40">
          <p className="text-lg md:text-xl leading-relaxed italic">
            <span className="text-3xl font-bold text-blue-400">“</span> At
            <span className="font-semibold text-white"> Particle14</span>, we
            believe every idea has the power to reshape digital landscapes. You
            don’t need extensive experience to start your journey—just your
            vision and a spark of creativity. We work with you every step of the
            way to transform your ideas into innovative, engaging digital
            experiences that deliver real results.{" "}
            <span className="text-3xl font-bold text-blue-400">”</span>
          </p>
        </div>
      </div>

      {/* Half Horizontal Line */}
      {/* <div className="relative w-1/2 border-t-2 border-gray-900 mx-auto mt-30 z-10 mb-32"></div> */}
    </section>
  );
};

export default About;

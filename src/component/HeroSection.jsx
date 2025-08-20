import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 bg-black overflow-hidden">
      {/* 🔵 Neon Glow Background */}
      <div className="absolute inset-0">
        <div className="w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[180px] absolute -top-40 -left-40"></div>
        <div className="w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px] absolute bottom-0 right-0"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-3xl z-10 flex-1 flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_20px_#3b82f6]">
          Welcome to <span className="text-blue-400">Particle14</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Innovating the future with technology
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
          >
            Connect with Us
          </Link>
        </div>
      </div>

      {/* Half Horizontal Line */}
      <div className="relative w-1/2 border-t-2 border-gray-800 mt-12 z-10"></div>
    </section>
  );
};

export default HeroSection;

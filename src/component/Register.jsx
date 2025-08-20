// src/pages/RegisterPage.jsx
import React, { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div
      className="flex items-center justify-center p-4 min-h-screen"
      style={{ background: "#000" }}
    >
      <div className="login-card w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-lg bg-black/70">
        {/* Header */}
        <div className="bg-[#282c34] px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
          <span className="text-white font-bold text-lg sm:text-xl">
            Create Account
          </span>
        </div>

        {/* Main Content */}
        <div className="bg-black/70 px-4 sm:px-8 py-6 sm:py-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-6 text-center">
            Register
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mb-6 space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black/80 text-white placeholder-gray-400 text-sm sm:text-base"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black/80 text-white placeholder-gray-400 text-sm sm:text-base"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black/80 text-white placeholder-gray-400 text-sm sm:text-base"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black/80 text-white placeholder-gray-400 text-sm sm:text-base"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-[1.01] text-sm sm:text-base"
            >
              Register
            </button>
          </form>

          {/* Social Register */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-gray-500 text-sm">OR</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex flex-row gap-4 items-center justify-center">
              <a
                href="#"
                className="flex items-center gap-2 text-blue-400 hover:underline text-sm sm:text-base"
              >
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a6fefea9-e36a-4384-8fd6-03a2e4b467bd.png"
                  alt="Google logo"
                  className="w-7 h-7 rounded-full border border-gray-400"
                />
                Google
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-blue-400 hover:underline text-sm sm:text-base"
              >
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/09a29bb7-c8aa-4668-bc75-8f104e570367.png"
                  alt="Facebook logo"
                  className="w-7 h-7 rounded-full border border-gray-400"
                />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

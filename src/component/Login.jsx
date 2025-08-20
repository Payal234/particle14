import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [resetModal, setResetModal] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    if (!username.trim())
      formErrors.username = "Please enter a valid username or email";
    if (password.length < 6)
      formErrors.password = "Password must be at least 6 characters";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div
      className="flex items-center justify-center p-4 min-h-screen"
      style={{ background: "#000" }}
    >
      <div className="login-card w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-lg bg-black/70">
        {/* Navbar */}
        <div className="bg-[#282c34] px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
          <span className="text-white font-bold text-lg sm:text-xl">
            Welcome
          </span>
          <div className="text-blue-400 text-sm">
            New user?{" "}
            <Link to="/register" className="text-white hover:underline">
              Register
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-black/70 px-4 sm:px-8 py-6 sm:py-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-6 text-center">
            Login Form
          </h2>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="mb-6">
            {/* Username */}
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-medium mb-1">
                Username or Email
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black/80 text-white placeholder-gray-400 text-sm sm:text-base"
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-medium mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black/80 text-white placeholder-gray-400 text-sm sm:text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-500"
                >
                  <i
                    className={`fas ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Remember & Forgot */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-3 sm:gap-0">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-sm text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <button
                type="button"
                onClick={() => setResetModal(true)}
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-[1.01] text-sm sm:text-base"
            >
              Sign In
            </button>
          </form>

          {/* Social Login */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-gray-500 text-sm">OR</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex flex-row gap-4 items-center justify-center">
              <Link
                to="#"
                className="flex items-center gap-2 text-blue-400 hover:underline text-sm sm:text-base"
              >
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a6fefea9-e36a-4384-8fd6-03a2e4b467bd.png"
                  alt="Google logo"
                  className="w-7 h-7 rounded-full border border-gray-400"
                />
                Google
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2 text-blue-400 hover:underline text-sm sm:text-base"
              >
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/09a29bb7-c8aa-4668-bc75-8f104e570367.png"
                  alt="Facebook logo"
                  className="w-7 h-7 rounded-full border border-gray-400"
                />
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Password Reset Modal */}
      {resetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-sm">
            <h2 className="text-lg font-bold mb-4">Reset Password</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 text-sm sm:text-base"
            />
            <div className="flex flex-col sm:flex-row justify-end gap-2">
              <button
                onClick={() => setResetModal(false)}
                className="px-4 py-2 text-gray-600 hover:underline text-sm sm:text-base"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm sm:text-base">
                Send Reset Link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

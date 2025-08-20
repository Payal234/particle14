import React from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 py-12 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 md:w-72 md:h-72 bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-purple-700/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 md:w-72 md:h-72 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-white-800 mb-4">Particle14</h3>
          <p className="flex items-center gap-2 text-sm sm:text-base">
            <Phone className="w-4 h-4 text-blue-400" /> +91 7078774692
          </p>
          <p className="flex items-center gap-2 mt-2 text-sm sm:text-base">
            <MapPin className="w-4 h-4 text-blue-400" /> 213 Apollo Premier, Vijay Nagar, Indore-452001, India
          </p>
          <p className="flex items-center gap-2 mt-2 text-sm sm:text-base">
            <Mail className="w-4 h-4 text-blue-400" /> help@company.com
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start sm:items-center">
          <h3 className="text-xl font-bold text-white-800 mb-4">Follow Us</h3>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/particle14_/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/particle14"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61565485735255"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-0 md:text-right">
          <h3 className="text-xl font-bold text-white-800 mb-4">Legal</h3>
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} Particle14. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

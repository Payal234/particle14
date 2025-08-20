import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  if (!service) return null; // safety check

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2 h-[400px] flex flex-col">
      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>

        {/* Description */}
        <p className="mt-2 text-gray-600 flex-1 line-clamp-3">
          {service.description}
        </p>

        {/* Learn More Button (smaller size + link to details) */}
        <Link
          to={`/services/${service.id}`}
          className="mt-3 inline-block bg-indigo-600 text-white text-sm px-3 py-1.5 rounded-md hover:bg-indigo-700 transition self-start"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

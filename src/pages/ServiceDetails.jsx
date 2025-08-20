import React from "react";
import { useParams, Link } from "react-router-dom";
import serviceData from "../data/serviceData.js";
import PageWrapper from "../component/PageWrapper";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = serviceData.find((s) => s.id === parseInt(id));

  if (!service) {
    return <h2 className="text-center text-red-500 mt-10">Service not found</h2>;
  }

  return (
    <PageWrapper>
    <section className="relative min-h-screen bg-black py-16 px-6 md:px-16 overflow-hidden">
      {/* 🔵 Neon Blue Radial Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[180px] absolute -top-40 -left-40"></div>
        <div className="w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px] absolute bottom-0 right-0"></div>
      </div>

      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/services"
          className="inline-block bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          ← Back to Services
        </Link>
      </div>

      {/* Service Details Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl mx-auto">
        <img
          src={service.image}
          alt={service.title}
          className="h-72 w-full object-cover rounded-lg mb-6"
        />
        <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
        <p className="mt-4 text-gray-600">{service.description}</p>

        <h3 className="mt-6 text-xl font-semibold text-gray-700">
          Technologies Used:
        </h3>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          {service.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-gray-700">
          Subservices:
        </h3>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          {service.subservices.map((sub, index) => (
            <li key={index}>{sub}</li>
          ))}
        </ul>
      </div>
    </section>
    </PageWrapper>
  );
};

export default ServiceDetails;

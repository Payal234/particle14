import React from "react";
import services from "../data/serviceData";
import ServiceCard from "../component/ServiceCard";
import PageWrapper from "../component/PageWrapper";
const ServicePage = () => {
  return (
    <PageWrapper>
    <div className="relative min-h-screen bg-black py-16 px-6 overflow-hidden">
      {/* 🔵 Neon Blue Radial Glow Background */}
      <div className="absolute inset-0">
        <div className="w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[180px] absolute -top-40 -left-40"></div>
        <div className="w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px] absolute bottom-0 right-0"></div>
      </div>

      {/* Content */}
      <h2 className="relative text-4xl font-bold text-center text-white mb-12 drop-shadow-[0_0_20px_#3b82f6]">
        Our Services
      </h2>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="shadow-lg shadow-blue-500/50 rounded-2xl"
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
    </PageWrapper>
  );
};

export default ServicePage;

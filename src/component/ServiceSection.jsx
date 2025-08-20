import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
  " AI &  ML",
  "Cybersecurity Services",
  "Web & Software Development",
  "Mobile App Development",
  "Cloud & DevOps Services",
  "IoT & Embedded Systems",
  "ERP, CRM & Enterprise Solutions",
  "EdTech & Academic Platforms",
  "2D/3D Animation & AR/VR",
  "Branding, UI/UX & Design",
  "Business Solutions & Consulting",
  "Web3, Blockchain & Smart Contracts",
];

const ServiceSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-black text-gray-300 py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Glow Background like Contact Page */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-purple-700/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center mt-14">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white-800">
          Our Services
        </h2>
         <div className="w-24 h-1 bg-blue-500 mx-auto mb-3 rounded-full shadow-lg shadow-blue-500/50 "></div>
        <p className="text-gray-400 mb-12">
          Explore the wide range of services we offer to help your business grow and innovate.
        </p>

        {/* Continuous Autoplay Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={3000}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center p-6 bg-gray-900 bg-opacity-80 rounded-2xl shadow-lg hover:shadow-xl transition text-center h-full">
                <h3 className="text-md md:text-lg font-semibold text-white">{service}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Explore Button */}
        <button
          onClick={() => navigate("/services")}
          className="mt-12 mb-16 bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition cursor-pointer"
        >
          Let's Explore
        </button>
      </div>
    </section>
  );
};

export default ServiceSection;

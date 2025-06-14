import React from "react";
import BannerImage from "../assets/assets_frontend/Banner.jpg";

const Header = () => {
  return (
    <section
      className="relative w-full h-[65vh] md:h-[85vh] bg-center bg-cover bg-no-repeat flex items-center px-6 md:px-16 lg:px-24 rounded-2xl"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="max-w-3xl">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#e0eaff] drop-shadow-sm">
          Healing Begins <br /> With Compassion
        </h1>

        {/* CTA Button */}
        <a
          href="#speciality"
          className="inline-block mt-6 px-6 py-3 bg-white text-gray-800 text-sm md:text-base font-semibold rounded-full hover:scale-105 transition-transform duration-300"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
};

export default Header;

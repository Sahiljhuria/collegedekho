import React from "react";
import background from "../component/images/job-ready-image.3bdf5e27.webp";

export const Degree = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-[450px] md:h-[500px] bg-cover bg-center w-full mt-10 flex items-center justify-center"
    >
      {/* Content Section */}
      <div className="bg-white bg-opacity-90 p-6 md:p-10 rounded-md shadow-lg max-w-3xl text-center mx-4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Get Job-Ready Degrees
        </h1>
        <p className="text-gray-600 mt-4 text-sm md:text-lg leading-relaxed">
          Enroll in programs that equip you with real-world skills, ensuring you
          are prepared for your dream job. Explore degrees that combine
          knowledge with practical experience.
        </p>

        {/* Button */}
        <div className="mt-6">
          <button className="h-12 w-full max-w-[250px] bg-orange-400 text-black font-semibold text-sm md:text-base rounded-sm hover:bg-orange-300 transition duration-300">
            Explore Programs
          </button>
        </div>
      </div>
    </div>
  );
};

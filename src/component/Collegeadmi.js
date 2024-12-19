import React from "react";
import number1 from "../component/images/number1-Icon.87c7b61e.svg";

export const Collegeadmi = () => {
  return (
    <div className="grid items-center justify-center mt-10 px-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
        <img
          src={number1}
          alt="number1-icon"
          className="h-12 w-12 md:h-16 md:w-16 object-contain"
        />
        <p className="font-bold text-2xl md:text-3xl text-gray-800 max-w-2xl leading-snug">
          India's Largest Common Application Form For College Admissions
        </p>
      </div>

      {/* Highlight Section */}
      <p className="text-orange-400 font-bold text-4xl md:text-5xl lg:text-6xl text-center mt-6 leading-tight">
        2000+ Colleges,{" "}
        <span className="text-black">1 Application Form</span>
      </p>

      {/* Subheading */}
      <p className="text-center text-lg md:text-2xl font-bold mt-6 text-gray-700">
        Applying to your dream colleges made easy!
      </p>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="h-12 w-full max-w-[300px] bg-[#3F53D9] text-white text-center rounded-sm font-semibold hover:bg-[#2D42A8] transition duration-300">
          Start Your Application
        </button>
      </div>
    </div>
  );
};

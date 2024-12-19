import React from "react";
import background from "../component/images/banner-image.f12c9bbc.webp";
import music from "../component/images/play-icon.e5e53e75.svg";

function Brightfuture() {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-[600px] w-full bg-cover bg-center flex items-center"
    >
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-white text-center lg:text-left mt-10 lg:mt-0">
            <p className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4">
              Right Guidance,
            </p>
            <p className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4">
              Bright Future
            </p>
            <p className="text-base md:text-lg lg:text-xl">
              Guiding lakhs of students and parents to find the right college.
            </p>
            <p className="text-base md:text-lg lg:text-xl">
              Building a better future of India,{" "}
              <span className="text-orange-400">one student at a time.</span>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 justify-center lg:justify-start">
              <div className="h-10 w-[200px] bg-orange-400 text-black flex items-center justify-center rounded-sm hover:bg-orange-300 hover:cursor-pointer">
                Find Your College
              </div>
              <div className="h-10 w-[200px] text-white border-2 border-orange-400 flex items-center justify-center rounded-sm hover:cursor-pointer hover:border-orange-600">
                Get Job Ready Degree
              </div>
            </div>

            {/* Watch Brand Film */}
            <div className="mt-6">
              <p className="text-orange-400 underline hover:cursor-pointer">
                Watch our brand film here
              </p>
            </div>
          </div>

          {/* Music Icon */}
          <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end">
            <img
              src={music}
              alt="Play Icon"
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brightfuture;

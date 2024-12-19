import React from "react";
import image1 from "../component/images/toi.webp";
import image2 from "../component/images/yourStory.webp";
import image3 from "../component/images/tweeter.d9fb9e15.svg";
import image4 from "../component/images/IndianExpress.webp";
import image5 from "../component/images/dainikBhaskar.webp";
import image6 from "../component/images/toi.webp";

export const Praisedmedia = () => {
  return (
    <div className="mt-10">
      {/* Header Section */}
      <div className="text-center">
        <p className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Praised by the Media
        </p>
      </div>

      {/* Media Logos */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-20 mt-6 mb-10 px-4">
        {[image1, image2, image3, image4, image5, image6].map((img, index) => (
          <img
            key={index}
            src={img}
            alt="media-logo"
            className="h-14 md:h-20 lg:h-24 object-contain bg-gray-200 rounded-md p-2"
          />
        ))}
      </div>

      {/* Career Recommendation Section */}
      <div className="bg-[#d9d7b6] text-black flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[300px] px-6 py-8 lg:py-0">
        {/* Text Content */}
        <div className="max-w-2xl mb-6 lg:mb-0">
          <p className="font-bold text-2xl md:text-3xl mb-4 text-center lg:text-left">
            Confused about the best career choice for you?
          </p>
          <p className="text-base md:text-lg text-center lg:text-left leading-relaxed">
            Discover your path with Career Compass, our personalised career
            recommendation tool. Explore your skills, personality, and interests
            for career advice and guidance designed just for you.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="h-12 w-full max-w-[300px] bg-orange-400 text-black font-medium rounded-md hover:bg-orange-300 transition duration-300">
            Get career recommendation
          </button>
        </div>
      </div>
    </div>
  );
};

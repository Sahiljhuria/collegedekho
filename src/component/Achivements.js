import React, { useState } from "react";
import image1 from "../component/images/cx-excellence-awards-2022.60af91c8.webp";
import image2 from "../component/images/dma-trailblazers.530975b5.webp";
import image3 from "../component/images/innovation-awards.faa2c980.webp";

const achievements = [
  {
    image: image1,
    title: "Education Innovation Awards",
    description: "(Entrepreneur India) 2022 and 2023",
  },
  {
    image: image2,
    title: "CX Excellence Awards 2022",
    description: "Best Customer Experience in Edutech Service",
  },
  {
    image: image3,
    title: "Indian Education Congress",
    description: "Best Education Category",
  },
  {
    image: image1,
    title: "n Awards",
    description: "(Entrepreneur India) 2022 and 2023",
  },
  {
    image: image2,
    title: "",
    description: "Best Customer Experience in Edutech Service",
  },
  {
    image: image3,
    title: "Indian Education Congress",
    description: "Best Education Category",
  },
];

export default function AchievementsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < achievements.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="w-full bg-blue-500 py-8 px-4 mt-20">
      {/* Section Title */}
      <div className="flex justify-center  items-center">
        <div className="text-center mb-4">
        <h2 className="text-white text-4xl font-bold">Our Achievements</h2>
        {/* Navigation Buttons Below Title */}
        <div className="flex justify-center gap-4 mt-2">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
            disabled={currentIndex === 0}
          >
            &#8592;
          </button>
          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
            disabled={currentIndex === achievements.length - 3}
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Achievements Slider */}
      <div className="flex justify-center mt-6 overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 33.33}%)`,
            width: `${achievements.length * 33.33}%`,
          }}
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/3 text-center px-4"
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                className="rounded-lg mx-auto h-44 w-80 object-cover"
              />
              <h3 className="text-white mt-4 font-semibold">
                {achievement.title}
              </h3>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
      
    </div>
  );
}

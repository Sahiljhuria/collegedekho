import React, { useState } from "react";

const Youtube = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "https://www.youtube.com/embed/IWGNR7TbrFg?start=4", // First video
    "https://www.youtube.com/embed/iOIsemcUjNQ",         // Second video
    "https://www.youtube.com/embed/h1ib_3FWTog",         // Third video
    "https://www.youtube.com/embed/Y4C0TM8XKyw",         // Fourth video
    "https://www.youtube.com/embed/SsxawQCEXBk",         // Fifth video
    "https://www.youtube.com/embed/Zl1lsV341u0?start=1", // Sixth video
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative mx-auto mt-16 w-full max-w-7xl px-4">
      {/* Title */}
      <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8 text-gray-800">
        Top Colleges Recommended For You
      </div>

      {/* Video Slider */}
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((url, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <iframe
                src={url}
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`Video ${index + 1}`}
              ></iframe>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 sm:p-3 hover:bg-gray-900 transition duration-300"
          onClick={handlePrev}
        >
          &#8592;
        </button>
        <button
          className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 sm:p-3 hover:bg-gray-900 transition duration-300"
          onClick={handleNext}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Youtube;

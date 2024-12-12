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
    <div className="relative mx-auto overflow-hidden mt-16 w-[600px] h-[400px] rounded-xl">
      {/* Slides */}

      <div className="text-4xl font-semibold text-center mb-10">Top Colleges  Recommended For You</div>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((url, index) => (
          <iframe
            key={index}
            src={url}
            className="w-[600px] h-[400px] flex-shrink-0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={`Video ${index + 1}`}
          ></iframe>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
        onClick={handlePrev}
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
        onClick={handleNext}
      >
        &#8594;
      </button>
    </div>
  );
};

export default Youtube;

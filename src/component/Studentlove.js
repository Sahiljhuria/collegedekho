import React, { useState, useEffect } from "react";

const Studentlove = () => {
  const testimonials = [
    { id: 1, name: "Sahana", role: "Student", text: "The counselor helped me a lot in finding my college. She reduced my burden of finding my dream college." },
    { id: 2, name: "Preeya Kamatagi", role: "Student", text: "I was searching for a good college in Bengaluru. Tasneem Banu Ma'am guided me so well." },
    { id: 3, name: "R. Priya Dharshini", role: "Student", text: "Geetha provided a lot of information about courses to help me with the next step in my career." },
    { id: 4, name: "Rohan", role: "Student", text: "I am very happy with the guidance I received. It helped me make an informed decision about college." },
    { id: 5, name: "Anjali", role: "Student", text: "This platform made my college search so easy and stress-free. I couldn’t be happier!" },
    { id: 6, name: "Varun", role: "Student", text: "The advice I received was extremely helpful and guided me toward the best college for my goals." },
    { id: 7, name: "Jonty", role: "Student", text: "The advice I received was extremely helpful and guided me toward the best college for my goals." },
    { id: 8, name: "Sumit", role: "Student", text: "The advice I received was extremely helpful and guided me toward the best college for my goals." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsToShow(3); // Large screens: 3 items
      else if (window.innerWidth >= 768) setItemsToShow(2); // Tablets: 2 items
      else setItemsToShow(1); // Mobile: 1 item
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial setup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex < testimonials.length - itemsToShow) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8">
      <h2 className="text-center text-xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
        Our Students Love Us!
      </h2>

      <div className="relative flex items-center">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className={`p-2 sm:p-3 h-10 sm:h-12 mr-2 flex justify-center items-center bg-gray-300 rounded-full hover:bg-gray-400 disabled:opacity-50 ${
            currentIndex === 0 && "pointer-events-none"
          }`}
        >
          &lt;
        </button>

        {/* Testimonials */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
              width: `${(testimonials.length * 100) / itemsToShow}%`
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 px-2 sm:px-4"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="bg-blue-500 text-white rounded-lg shadow-lg p-4 sm:p-6 h-48 sm:h-56 flex flex-col justify-between">
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-4">
                    {testimonial.text}
                  </p>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">{testimonial.name}</h3>
                    <p className="text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className={`p-2 sm:p-3 h-10 sm:h-12 ml-2 flex justify-center items-center bg-gray-300 rounded-full hover:bg-gray-400 disabled:opacity-50 ${
            currentIndex >= testimonials.length - itemsToShow && "pointer-events-none"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Studentlove;

import React, { useState } from "react";

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
  const itemsToShow = 3;

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
    <div className="max-w-7xl mx-auto p-6  ">
      <h2 className="text-center text-4xl font-bold mb-6 mt-20">Our Students Love Us!</h2>
      <div className="relative flex items-center">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="p-3 h-12 mr-2 flex justify-center items-center bg-gray-300 rounded-full hover:bg-gray-400"
        >
          &lt;
        </button>

        {/* Testimonials Carousel */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 500}px)`
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 bg-blue-500 text-white rounded-lg shadow-lg mx-2"
                style={{
                  width: "500px",
                  height: "300px"
                }}
              >
                <div className="p-6 flex flex-col justify-between h-full">
                  <p className="mb-6 text-xl leading-relaxed">{testimonial.text}</p>
                  <div>
                    <h3 className="font-bold text-2xl">{testimonial.name}</h3>
                    <p className="text-lg">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="p-3 h-12 ml-2 flex justify-center items-center bg-gray-300 rounded-full hover:bg-gray-400"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Studentlove;

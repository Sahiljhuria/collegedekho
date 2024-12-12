import React, { useRef } from 'react';
import image1 from '../compoenetsecond/allimages/jee_main_helpline_number_1.jpg';
import image2 from '../compoenetsecond/allimages/JEE_Main_Preparation_Tips_For_Guaranteed_Success.png';
import image3 from '../compoenetsecond/allimages/ICT_Mumbai_logo.png';
import image4 from '../compoenetsecond/allimages/KCET_JJxKATJ.png';
import image5 from '../compoenetsecond/allimages/Untitled_design_-_2024-02-27T102933.084_1.png';
import image6 from '../compoenetsecond/allimages/Untitled_design_10_GPSyhLK.png';

const Question = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Image data array
  const images = [
    { src: image1, caption: 'JEE Helpline' },
    { src: image2, caption: 'JEE Preparation Tips' },
    { src: image3, caption: 'ICT Mumbai Logo' },
    { src: image4, caption: 'KCET Info' },
    { src: image5, caption: 'Design Update' },
    { src: image6, caption: 'Seminar Highlights' },
  ];

  return (
    <div className="w-10/12 mx-auto p-8 font-sans">
      {/* Top Banner Section */}
      <div className="bg-gray-100 border border-gray-300 p-8 mb-10 text-start rounded w-full">
        <div className="border-[4px] border-blue-400 p-10">
          <p className="mb-6">
            Still have questions about Alamuri Ratnamala Institute of Engineering and Technology Thane?
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded hover:bg-blue-600">
            Ask a Question
          </button>
        </div>
      </div>

      {/* Q&A Section */}
      <div className="border border-gray-300 p-8 mb-10 rounded w-full">
        <h3 className="text-xl font-semibold mb-4">
          Alamuri Ratnamala Institute of Engineering and Technology QnA
        </h3>
        <p className="text-base mb-3">
          What are the various facilities available on campus at ARMIET, Thane?
        </p>
        <hr className="pb-64" />
        <p className="hover:cursor-pointer hover:text-blue-500">See more</p>
      </div>

      {/* Image Carousel Section */}
      <div className="relative w-full">
        <p className="font-semibold text-2xl flex justify-center">Related News</p>
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-xl px-5 py-3 rounded-full z-10"
        >
          &#8249;
        </button>
        <div
          ref={carouselRef}
          className="flex overflow-hidden space-x-8 p-8"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-[220px] text-center flex-shrink-0"
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-[300px] h-[200px] object-cover border border-gray-300 rounded mb-4"
              />
              <p className="text-base">{image.caption}</p>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-xl px-5 py-3 rounded-full z-10"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Question;

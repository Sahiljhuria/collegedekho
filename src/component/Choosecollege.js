import React from "react";
import image1 from '../component/images/process-icon1.4c350d47 (1).svg';
import image2 from '../component/images/process-icon2.9fa06e3e.svg';
import image3 from '../component/images/process-icon3.556fdc79.svg';
import image4 from '../component/images/process-icon4.e6cd09b1.svg';
import image5 from '../component/images/process-icon5.4c7a7882.svg';
import image6 from '../component/images/process-icon6.f4b86525.svg';
import bg from '../component/images/Heart-Banner-Desktop.d5ea35d5.webp'

const Choosecollege = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      {/* Header */}
      <div className="text-center mt-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Choosing the right college can be confusing
        </h1>
        <p className="text-gray-600 mt-2">
          We're here to guide you at every step of your college journey.
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
        {[
          "Register",
          "Select Course",
          "Fill Application",
          "Upload Documents",
          "Make Payment",
          "Admission Confirmed",
        ].map((step, index) => (
          <div
            key={index}
            className="bg-green-100 text-green-800 py-2 px-4 rounded-lg ml-5 text-sm md:text-base hover:cursor-pointer hover:bg-green-200 hover:text-green-900"
          >
            {step}
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl">
        {[
          {
            title: "Get Your Career Match",
            description:
              "Take our free career compass personality quiz and get top career options for you.",
            image: image1,
          },
          {
            title: "Apply With One Form",
            description:
              "One platform to apply to 2000+ esteemed colleges.",
            image: image2,
          },
          {
            title: "Track applications in one place",
            description:
              "Apply to and manage all college applications through My Profile.",
            image: image3,
          },
          {
            title: "Talk to Admission Experts",
            description:
              "Get free personalized expert guidance on colleges & courses.",
            image: image4,
          },
          {
            title: "Easy Apply in 5 mins",
            description:
              "Fill your college applications in 5 minutes or less.",
            image: image5,
          },
          {
            title: "Get Exciting Rewards",
            description:
              "Win amazing rewards and cash-backs while applying.",
            image: image6,
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-[#3F53D9] p-4 rounded-lg shadow-md flex items-start space-x-4"
          >
           
            <div>
              <h3 className="text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="text-sm text-white mt-2">
                {card.description}
              </p>
            </div>
            <img
              src={card.image}
              alt={card.title}
              className="h-12 w-12 bg-white object-contain"
            />
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <button className="h-10 w-[300px] bg-orange-400 text-black p-2 text-center rounded-sm hover:bg-orange-300 hover:cursor-pointer">
          Let's start your application
        </button>
        <button className="h-10 w-[300px] text-black border-orange-400 border-2 p-2 text-center rounded-sm hover:cursor-pointer hover:border-orange-600">
          Talk to a college expert
        </button>
      </div>
        
      
        <div  style={{ backgroundImage: `url(${bg} )` }} className="h-[200px] w-[100%] mt-36 "></div>
      
    </div>
  );
};

export default Choosecollege;

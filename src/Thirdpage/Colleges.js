import React from "react";
import image1 from "../Thirdpage/image/15018524541479294865INS.avif";
import image2 from "../Thirdpage/image/36385979_1840226622704259_35640201262923776_n-1-400x290.avif";
import image3 from "../Thirdpage/image/Amrut_Mody_School_of_ManagementAhmedabad3.avif";
import image4 from "../Thirdpage/image/Quest_Group_of_Institutionsons_3.avif"
import image5 from "../Thirdpage/image/delhi-campus.avif";
import image6 from "../Thirdpage/image/images_7.avif";
import image7 from "../Thirdpage/image/HArivandana.avif"
import image8 from "../Thirdpage/image/UBS (1).avif";
import image9 from "../Thirdpage/image/Sambhram_Academy_of_Management_Studies_Bangalore2.avif";

const Colleges = () => {
  

  const collegeData = [
    {
      name: "Institute of Business Studies and Research",
      location: "Navi Mumbai, Maharashtra",
      fees: "₹1,30,000 - ₹10,00,000",
      accreditation: "UGC",
      rating: "4.1",
      image: image1,
      shortlisted: "Shortlisted by 5,110+ students",
    },
    {
      name: "Ambalika Institute of Management and Technology",
      location: "Lucknow, Uttar Pradesh",
      fees: "₹17,000 - ₹1,06,249",
      accreditation: "AICTE",
      rating: "4.4",
      image: image2,
      shortlisted: "Shortlisted by 15,913+ students",
    },
    {
      name: "Harivandana College",
      location: "Rajkot, Gujarat",
      fees: "₹24,000 - ₹30,000",
      accreditation: "AICTE",
      rating: "3.9",
      image: image3,
      shortlisted: "Shortlisted by 1,136+ students",
    },
    {
        name: "Ambalika Institute of Management and Technology",
        location: "Lucknow, Uttar Pradesh",
        fees: "₹17,000 - ₹1,06,249",
        accreditation: "AICTE",
        rating: "4.4",
        image: image4,
        shortlisted: "Shortlisted by 15,913+ students",
      },
      {
        name: "Harivandana College",
        location: "Rajkot, Gujarat",
        fees: "₹24,000 - ₹30,000",
        accreditation: "AICTE",
        rating: "3.9",
        image: image5,
        shortlisted: "Shortlisted by 1,136+ students",
      },
      {
        name: "Ambalika Institute of Management and Technology",
        location: "Lucknow, Uttar Pradesh",
        fees: "₹17,000 - ₹1,06,249",
        accreditation: "AICTE",
        rating: "4.4",
        image: image6,
        shortlisted: "Shortlisted by 15,913+ students",
      },
      {
        name: "Harivandana College",
        location: "Rajkot, Gujarat",
        fees: "₹24,000 - ₹30,000",
        accreditation: "AICTE",
        rating: "3.9",
        image: image7,
        shortlisted: "Shortlisted by 1,136+ students",
      },
      
      {
        name: "Ambalika Institute of Management and Technology",
        location: "Lucknow, Uttar Pradesh",
        fees: "₹17,000 - ₹1,06,249",
        accreditation: "AICTE",
        rating: "4.4",
        image: image8,
        shortlisted: "Shortlisted by 15,913+ students",
      },
      {
        name: "Harivandana College",
        location: "Rajkot, Gujarat",
        fees: "₹24,000 - ₹30,000",
        accreditation: "AICTE",
        rating: "3.9",
        image: image9,
        shortlisted: "Shortlisted by 1,136+ students",
      },
      
      
  ];

  return (
    <div className="flex justify-center">

      {/* Right Side Colleges */}
      <div className="max-w-screen-lg mx-auto md:w-3/4 p-4">
        <h2 className="text-lg font-bold mb-4">College Listings</h2>
        <p className="font-bold text-xl text-gray-400 mb-3">Showing  Top College Of India</p>
        <div className="space-y-6">
          {collegeData.map((college, index) => (
            <div
              key={index}
              className="p-4 bg-white border rounded-lg shadow-sm flex flex-col md:flex-row"
            >
              {/* College Image */}
              <div className="md:w-1/4 w-full mb-4 md:mb-0">
                <img
                  src={college.image}
                  alt={college.name}
                  className="h-40 w-full object-cover rounded-lg"
                />
              </div>

              {/* College Details */}
              <div className="md:w-3/4 w-full">
                {/* Top Section */}
                <div className="flex justify-between items-center mb-2 pl-5">
                  <div>
                    <h3 className="text-lg font-bold">{college.name}</h3>
                    <p className="text-sm text-gray-600">{college.location}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm ">
                    {college.rating}
                  </span>
                </div>

                {/* Fees and Accreditation */}
                <p className="text-sm pl-5">
                  Fees: <span className="font-semibold ">{college.fees}</span>
                </p>
                <p className="text-sm pl-5">
                  Accreditation:{" "}
                  <span className="font-semibold ">{college.accreditation}</span>
                </p>

                {/* Bottom Section */}
                <div className="mt-4 flex justify-between items-center pl-5">
                  <p className="text-xs text-gray-500 ">{college.shortlisted}</p>
                  <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colleges;

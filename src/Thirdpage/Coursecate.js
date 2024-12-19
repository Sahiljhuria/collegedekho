import React from "react";

const Coursecate = () => {
  return (
    <div className=" p-4 text-gray-800 font-sans">
      <div className="max-w-screen-lg mx-auto  border-4 border-gray-100">
        {/* Section 1: Other Popular B.Tech Courses */}
        <div className="border border-gray-300 bg-[#E9ECFF] p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Other Popular B.Tech Courses
          </h2>
          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <a href="#" className="text-blue-700 hover:underline">
              B.Tech in Computer Science (Engineering) Colleges in India
            </a>
            <a href="#" className="text-blue-700 hover:underline">
              B.Tech in Mechanical Engineering Colleges in India
            </a>
            <a href="#" className="text-blue-700 hover:underline">
              B.Tech in Civil Engineering (Engineering) Colleges in India
            </a>
            <a href="#" className="text-blue-700 hover:underline">
              B.Tech in Electronics and Communication (Engineering) Colleges in
              India
            </a>
          </div>
        </div>

        {/* Section 2: Other Popular Degrees */}
        <div className="border border-gray-300 bg-[#E9ECFF] p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Other Popular Degrees
          </h2>
          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <a href="#" className="text-blue-700 hover:underline">
              B.Arch Colleges in India
            </a>
            <a href="#" className="text-blue-700 hover:underline">
              B.Tech+M.Tech Colleges in India
            </a>
            <a href="#" className="text-blue-700 hover:underline">
              B.Tech+MBA Colleges in India
            </a>
            <a href="#" className="text-blue-700 hover:underline">
              B.Plan Colleges in India
            </a>
          </div>
        </div>

        {/* Section 3: Popular Courses */}
        <div className="border border-gray-300 bg-[#E9ECFF] p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Popular Courses
          </h2>
          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <a href="#" className="text-blue-700 hover:underline">
              Diploma in Metallurgical Engineering
            </a>
            <a href="#" className="text-blue-700 hover:underline">
              B.Tech - Electrical Engineering
            </a>
            <a href="#" className="text-blue-700 hover:underline">
              B.Tech - Automobile Engineering
            </a>
            <a href="#" className="text-blue-700 hover:underline">
              B.Tech Agricultural Engineering
            </a>
            <a href="#" className="text-blue-700 hover:underline">
              B.Tech Plastic Engineering
            </a>
          </div>
        </div>

        {/* Section 4: Top Engineering Colleges */}
        <div className="border border-gray-300 bg-[#E9ECFF] p-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Top Engineering Colleges
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 text-sm">
            <a href="#" className="text-blue-700 hover:underline">
              Indian Institute of Technology, Kharagpur
            </a>
            <a href="#" className="text-blue-700 hover:underline">
              Indian Institute of Technology, Delhi
            </a>
            <a href="#" className="text-blue-700 hover:underline">
              Indian Institute of Science, Bangalore
            </a>
            <a href="#" className="text-blue-700 hover:underline">
              Indian Institute of Technology, Roorkee
            </a>
            <a href="#" className="text-blue-700 hover:underline">
              Indian Institute of Technology, Chennai
            </a>
            <a href="#" className="text-blue-700 hover:underline">
              Indian Institute of Technology, Mumbai
            </a>
            <a href="#" className="text-blue-700 hover:underline">
              Indian Institute of Technology, Guwahati
            </a>
            <a href="#" className="text-blue-700 hover:underline">
              Indian Institute of Technology, Kanpur
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursecate;
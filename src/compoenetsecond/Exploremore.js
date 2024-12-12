import React, { useState } from "react";

const Exploremore = () => {
  const [activeTab, setActiveTab] = useState("state");

  // Data for both tabs
  const data = {
    state: {
      degree: [
        "B.Tech Colleges in Maharashtra",
        "Diploma Colleges in Maharashtra",
        "M.Tech Colleges in Maharashtra",
        "B.Arch Colleges in Maharashtra",
        "M.Arch Colleges in Maharashtra",
      ],
      specialization: [
        "Mechanical Engineering Colleges in Maharashtra",
        "Civil Engineering Colleges in Maharashtra",
        "Electrical Engineering Colleges in Maharashtra",
        "Computer Science Colleges in Maharashtra",
        "Computer Engineering Colleges in Maharashtra",
      ],
      course: [
        "B.Tech Mechanical Engineering Colleges in Maharashtra",
        "B.Tech Electrical Engineering Colleges in Maharashtra",
        "B.Tech Telecommunication Colleges in Maharashtra",
        "B.Tech Electronics Engineering Colleges in Maharashtra",
        "B.Tech Chemical Engineering Colleges in Maharashtra",
      ],
    },
    city: {
      degree: [
        "B.Tech Colleges in Pune",
        "Diploma Colleges in Mumbai",
        "M.Tech Colleges in Nagpur",
        "B.Arch Colleges in Nashik",
        "M.Arch Colleges in Kolhapur",
      ],
      specialization: [
        "Mechanical Engineering Colleges in Pune",
        "Civil Engineering Colleges in Mumbai",
        "Electrical Engineering Colleges in Nagpur",
        "Computer Science Colleges in Nashik",
        "Computer Engineering Colleges in Kolhapur",
      ],
      course: [
        "B.Tech Mechanical Engineering Colleges in Pune",
        "B.Tech Electrical Engineering Colleges in Mumbai",
        "B.Tech Telecommunication Colleges in Nagpur",
        "B.Tech Electronics Engineering Colleges in Nashik",
        "B.Tech Chemical Engineering Colleges in Kolhapur",
      ],
    },
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("state")}
          className={`px-6 py-2 rounded border ${
            activeTab === "state" ? "bg-blue-600 text-white" : "bg-white text-gray-800"
          }`}
        >
          By State
        </button>
        <button
          onClick={() => setActiveTab("city")}
          className={`px-6 py-2 rounded border ${
            activeTab === "city" ? "bg-blue-600 text-white" : "bg-white text-gray-800"
          }`}
        >
          By City
        </button>
      </div>

      {/* Data Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Degree Section */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg mb-4">By Degree</h2>
          <ul className="space-y-2">
            {data[activeTab].degree.map((item, index) => (
              <li key={index} className="text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Specialization Section */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg mb-4">By Specialization</h2>
          <ul className="space-y-2">
            {data[activeTab].specialization.map((item, index) => (
              <li key={index} className="text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Course Section */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-bold text-lg mb-4">By Course</h2>
          <ul className="space-y-2">
            {data[activeTab].course.map((item, index) => (
              <li key={index} className="text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Exploremore;
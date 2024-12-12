import React, { useState } from "react";
import image1 from "../src/component/images/Tech-Circle.94f1348f.webp";
import image2 from "../src/component/images/Economics-Times.a829ebfd.webp";
import image3 from "../src/component/images/Indian-Express.9c055018.webp";
import image4 from "../src/component/images/What_is_a_Good_MICAT_Score.avif";
import image5 from "../src/component/images/Things_to_Carry_to_SNAP_Exam_Centre.avif";
import image6 from "../src/component/images/Copy_of_Cheapest_MBBS_Colleges_in_TN_accepting_NEET_2024_20240522_092817_0000.avif";
import image7 from "../src/component/images/Untitled_design_-_2023-06-16T125818.415_iUZP7Ch.avif";
import image8 from "../src/component/images/Untitled_design_-_2023-06-16T125818.415_iUZP7Ch.avif";
import image9 from "../src/component/images/Maharashtra_SSC_Geography_Question_Bank_2025.avif";
import image10 from "../src/component/images/cgc_3.avif";
import image11 from "../src/component/images/Oriental_logo_200x200.avif";
import image12 from "../src/component/images/Renaissance_University_Indore_-_Logo_2.avif";

const Medianews = () => {
  const tabs = [
    {
      id: "media",
      label: "Media",
      data: [
        { id: 1, image: image1,  text: "London-based Man Capital backs CollegeDekho" },
        { id: 2, image: image2, text: "CollegeDekho Helps Secure 20K Admissions" },
        { id: 3, image: image3,  text: "Winter Capital Doubles Down On CollegeDekho Investment, Pumps In $9 Mn" },
      ],
    },
    {
      id: "articles",
      label: "Articles",
      data: [
        { id: 4, image: image4,  text: "What is a Good MICAT 2025 Score?" },
        { id: 5, image: image5,  text: "Things to Carry to Snap 2024 Exam Center." },
        { id: 6, image: image6,  text: "MCC NEET counselling Process 2024 (over):Important Dates,Seat Matrix." },
      ],
    },
    {
      id: "news",
      label: "News",
      data: [
        { id: 7, image: image7,  text: "UP  Board 10th Time Table 2025" },
        { id: 8, image: image8,  text: "RBSE Board 10th Time Table 2025" },
        { id: 9, image: image9,  text: "RBSE Board 10th Time Table 2025" },
      ],
    },
    {
      id: "boards",
      label: "Boards",
      data: [
        { id: 10, image: image10, text: "UP  Board 10th Time Table 2025" },
        { id: 11, image: image11,text: "RBSE Board 10th Time Table 2025" },
        { id: 12, image: image12, text: "RBSE Board 10th Time Table 2025"},
      ],
    },
    {
      id: "partners",
      label: "Top Partner Colleges",
      data: [
        { id: 13, image: image4,  text: "XYZ University - Top Rankings in 2024." },
        { id: 14, image: image5, text: "ABC Institute - Excellence in Engineering." },
        { id: 15, image: image6, text: "LMN College - Best Placements in the Region." },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("media");

  const activeData = tabs.find((tab) => tab.id === activeTab)?.data || [];

  return (
    <div className="max-w-6xl mx-auto p-6 mb-16 mt-16">
      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-lg font-medium ${
              activeTab === tab.id
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-28 ">
        {activeData.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <img src={item.image} alt={item.title} className="mb-4 rounded-lg" />
            <h3 className="font-bold text-xl mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medianews;

import React, { useState } from "react";

const Perfectcollege = () => {
  const tabs = [
    { name: "Engineering" },
    { name: "Management" },
    { name: "Commerce and Banking" },
    { name: "Medical" },
    { name: "Science" },
    { name: "Hotel Management" },
    { name: "Information Technology" },
    { name: "Arts & Humanities" },
    { name: "Pharmacy" },
    { name: "Law" },
    { name: "Education" },
  ];

  const content = {
    Engineering: [
      {
        title: "Featured Colleges",
        items: [
          "Parul University",
          "K. R. Mangalam University",
          "Chandigarh University",
          "Swarnim Startup and Innovation University",
          "Lovely Professional University",
          "Sanskriti University",
          "Jaipur National University",
          "Institute of Engineering and Management",
        ],
      },
      {
        title: "Important Exams",
        items: ["JEE Main", "JEE Advanced", "WBJEE", "TS EAMCET","VITEEE"],
      },
      {
        title: "Top States",
        items: ["Maharashtra", "Tamil Nadu", "Uttar Pradesh", "Rajasthan","Karnataka","Punjab"],
      },
      {
        title: "Related Courses",
        items: ["B Tech", "M Tech", "Bachelor of Engineering","Mechanical Engineering","Automobile Engineering", "Civil Engineering", "Aerospace Engineering"],
      },
    ],
    Management: [
      {
        title: "Featured Colleges",
        items: [
            "Parul University",
            "K. R. Mangalam University",
            "Chandigarh University",
            "Swarnim Startup and Innovation University",
            "Lovely Professional University",
            "Sanskriti University",
            "DIT University",
            "Athena School of Management",
            "Sanjay Ghodawat Uni..",
            "Delhi Metropolitan Education"
        ],
      },
      {
        title: "Important Exams",
        items: ["CAT", "MAT", "XAT", "GMAT","NMAT"],
      },
      {
        title: "Top States",
        items: ["Delhi", "Karnataka", "Tamilnadu", "Maharashtra","Rajasthan","Punjab"],
      },
      {
        title: "Related Courses",
        items: ["MBA", "PGDM", "BBA","MBA", "PGDM", "BBA","MBA", "PGDM", "BBA", "Executive MBA"],
      },
    ],
    "Commerce and Banking": [
      {
        title: "Featured Colleges",
        items: [
          "Shri Ram College of Commerce",
          "St. Xavier's College",
          "Christ University",
          "Loyola College",
          "Parul University",
            "K. R. Mangalam University",
            "Chandigarh University",
            "Swarnim Startup and Innovation University",
            "Lovely Professional University",
            "Sanskriti University",
           
        ],
      },
      {
        title: "Important Exams",
        items: ["CPT", "IPCC","IBS PO","CUBAT CAT", "CFA", "CA Final"],
      },
      {
        title: "Top States",
        items: ["Delhi", "Mumbai", "Chennai", "Kolkata" ,"Uttar Pradesh","Haryana"],
      },
      {
        title: "Related Courses",
        items: ["BCom", "MCom","Chartered Financial Analyst", "CA", "CFA","B Com","MA Economic"],
      },
    ],
    Medical: [
      {
        title: "Featured Colleges",
        items: ["AIIMS Delhi","Kongunadu Arts & Science College","I.T.S. Dental College, Muradnagar","Shanti Business School", "CMC Vellore", "JIPMER Puducherry", "KMC Manipal","Marudhar Engineering College"],
      },
      {
        title: "Important Exams",
        items: ["NEET", "AIIMS MBBS","NEET PG","NEET SS", "PGIMER", "JIPMER"],
      },
      {
        title: "Top States",
        items: ["Tamil Nadu", "Kerala", "Karnataka", "Maharashtra","Rajsthan"],
      },
      {
        title: "Related Courses",
        items: ["MBBS", "BDS", "Nursing", "Pharmacy"],
      },
    ],
    Science: [
      {
        title: "Featured Colleges",
        items: [
          "Indian Institute of Science",
          "St. Stephen's College",
          "Fergusson College",
          "Presidency College",
          "Sanskriti University",
          "Jaipur National University",
          "Institute of Engineering and Management",
          "Jagannath University NCR Haryana",
          "SAGE University"
        ],
      },
      {
        title: "Important Exams",
        items: ["IIT JAM", "GATE", "CSIR NET", "BHU UET","IISER Aptitude Test"],
      },
      {
        title: "Top States",
        items: ["West Bengal","Andhra Pradesh","Punjab", "Delhi", "Maharashtra", "Tamil Nadu"],
      },
      {
        title: "Related Courses",
        items: ["BSc", "MSc","BSc Home Science","BSc Computer Science", "Integrated MSc", "PhD","BSc Psychology","BSc Microbiology"],
      },
    ],
  
    "Hotel Management": [
      {
        title: "Featured Colleges",
        items: [
            "DIT University",
            "K. R. Mangalam University",
            "Chandigarh University",
            "Swarnim Startup and Innovation University",
            "Lovely Professional University",
            "Sanskriti University",
            "Jaipur National University",
            "Institute of Engineering and Management",
        ],
      },
      {
        title: "Important Exams",
        items: ["UPSEE", "LPUNEST", "JMIEE","IPU CET","SAAT"],
      },
      {
        title: "Top States",
        items: [ "Karnataka", "Maharashtra", "Goa","Punjab", "Delhi"],
      },
      {
        title: "Related Courses",
        items: ["Hotel Management", "MBA in Hotel Management", "Bachelor of Hotel Management", "Event Management","BBA in Hotel Management"],
      },
    ],
    "Information Technology": [
      {
        title: "Featured Colleges",
        items: [
            "SAGE University",
            "Parul University",
            "Lovely Professional University",
            "Lingaya's Vidyapeeth",
            "Swarnim Startup and Innovation University",
            "Lovely Professional University",
            "Sanskriti University",
            "Jaipur National University",
            
        ],
      },
      {
        title: "Important Exams",
        items: ["OJEE","JEE Main", "GATE", "NIMCET","CUSAT CAT"],
      },
      {
        title: "Top States",
        items: ["Delhi","Karnataka", "Tamil Nadu", "Telangana", "Maharashtra"],
      },
      {
        title: "Related Courses",
        items: ["BCA", "MCA", "BSc IT","MSc Data Science","PGDCA Course","BBA in Computer Application", "Data Science"],
      },
    ],
    "Arts & Humanities": [
      {
        title: "Featured Colleges",
        items: [
            "SAGE University",
          "Lady Shri Ram College",
          "Miranda House",
          "St. Xavier's Mumbai",
          "Presidency College Chennai",
          "SAGE University",
            "Parul University",
            "Lovely Professional University",
            "Lingaya's Vidyapeeth",
        ],
      },
      {
        title: "Important Exams",
        items: ["CUET","LPUNEST","CUET PG", "TISSNET", "SET"],
      },
      {
        title: "Top States",
        items: ["Rajasthan", "Delhi", "Maharashtra", "West Bengal", "Kerala"],
      },
      {
        title: "Related Courses",
        items: ["BA", "MA","MA Hindi", "Mass Communication","Bachelor of Fine Arts","Bachelor of Visual Arts", "Psychology"],
      },
    ],
    Pharmacy: [
        {
          title: "Featured Colleges",
          items: [
            "Parul University",
            "K. R. Mangalam University",
            "Chandigarh University",
            "Swarnim Startup and Innovation University",
            "Lovely Professional University",
            "Sanskriti University",
            "Jaipur National University",
            "Institute of Engineering and Management",
          ],
        },
        {
          title: "Important Exams",
          items: ["LPUNEST","IIT JAM", "GATE", "CSIR NET", "ICAR"],
        },
        {
          title: "Top States",
          items: ["West Bengal","Punjab", "Delhi", "Maharashtra", "Tamil Nadu"],
        },
        {
          title: "Related Courses",
          items: [ "B Pharmacy",  "Pharm D", " D Pharma",
            "M Pharma",
            "B Pharm + MBA Integrated",
           " M Pharm in Pharmaceutics"
            ],
        },
      ],
      Law: [
        {
          title: "Featured Colleges",
          items: [
            "SAGE University",
          "Lady Shri Ram College",
          "Miranda House",
          "St. Xavier's Mumbai",
          "Presidency College Chennai",
          "SAGE University",
            "Parul University",
            "Lovely Professional University",
            "Lingaya's Vidyapeeth",
          ],
        },
        {
          title: "Important Exams",
          items: ["CUET","LPUNEST","CUET PG", "TISSNET", "SET"],
        },
        {
          title: "Top States",
          items: ["Punjab","West Bengal", "Delhi", "Maharashtra", "Tamil Nadu"],
        },
        {
          title: "Related Courses",
          items: ["LLB","LLM","BA LLB","BBA LLB","B Com LLB","Intellectual Property Law","Business Law"],
        },
      ],
      Education: [
        {
          title: "Featured Colleges",
          items: [
           "Lovely Professional University",
          "St. Xavier's College",
          "Christ University",
          "Loyola College",
          "Parul University",
            "K. R. Mangalam University",
            "Chandigarh University",
            "Swarnim Startup and Innovation University",
            "Lovely Professional University",
            "Sanskriti University",
          ],
        },
        {
          title: "Important Exams",
          items: ["UGC NET","IIT JAM", "GATE", "CSIR NET", "ICAR"],
        },
        {
          title: "Top States",
          items: ["Punjab","West Bengal", "Delhi", "Maharashtra", "Tamil Nadu"],
        },
        {
          title: "Related Courses",
          items: ["B Ed", "M Ed", "D EL Ed Course", "B Ed in Commerce","B Ed in Accountancy"],
        },
      ],
    
  };

  const [activeTab, setActiveTab] = useState("Engineering");

  return (
    <div >

        <div className="text-center mt-12">
            <p className="text-4xl font-semibold">Find The Perfect College For You</p>
            <p className="text-gray-600 mt-4 text-xl mb-6">Discover top colleges, exams, and opportunities in your preferred field.</p>


        </div>





    <div className="bg-gray-100 p-4 ">
      {/* Tabs */}  

      
      <div className="flex justify-center items-center   gap-2  overflow-x-auto border-b border-gray-300 mb-4">
        {tabs.map((tab) => (
          <button 
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`py-2 px-4 text-sm font-semibold ${
              activeTab === tab.name
                ? "text-blue-500 border-b-4 border-orange-500 font-semibold"
                : "text-gray-500 hover:text-blue-500    "
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-wrap gap-4">
        {/* Left Column (Featured Colleges) */}
        <div className="flex-1 bg-[#E9ECFF]  rounded shadow text-gray-800 h-80">
          <h4 className="font-semibold  p-4">{content[activeTab][0].title}</h4>
          <ul className="space-y-1  flex flex-wrap ">
            {content[activeTab][0].items.map((item, idx) => (
              <li
                key={idx}
                className="text-sm  flex justify-center items-center   bg-white text-black px-3 py-1 border border-blue-300 rounded-md hover:bg-blue-500 hover:text-white transition  font-semibold h-10 ml-2 mt-2 hover:cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-4 ">
          {/* Important Exams */}
          <div className="bg-[#E9ECFF] p-4 rounded shadow text-gray-800 h-40">
            <h4 className="font-semibold mb-2">{content[activeTab][1].title}</h4>
            <ul className="flex flex-wrap">
              {content[activeTab][1].items.map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm flex justify-center items-center ml-2 mt-2 bg-white text-black px-3 py-1 border border-blue-300 rounded-md hover:bg-blue-500 hover:text-white transition h-10 font-semibold "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Top States */}
          <div className="bg-[#E9ECFF] p-4 rounded shadow text-gray-800 h-36 ">
            <h4 className="font-semibold mb-2">{content[activeTab][2].title}</h4>
            <ul className="flex flex-wrap gap-2">
              {content[activeTab][2].items.map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm flex justify-center items-center bg-white text-black px-3 py-1 border border-blue-300 rounded-md hover:bg-blue-500 hover:text-white transition h-10 font-semibold"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related Courses (Left Column) */}
        <div className="flex-1 bg-[#E9ECFF] p-4 rounded shadow text-gray-800">
          <h4 className="font-semibold mb-2">{content[activeTab][3].title}</h4>
          <ul className="space-y-2 flex flex-wrap">
            {content[activeTab][3].items.map((item, idx) => (
              <li
                key={idx}
                className="text-sm ml-2 mt-2 flex justify-center items-center bg-white px-3 py-1 border border-blue-300 rounded-md hover:bg-blue-500 hover:text-white transition h-10 font-semibold"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Perfectcollege;

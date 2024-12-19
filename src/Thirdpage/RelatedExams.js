import React from "react";

const RelatedExams = () => {
  const examData = [
    {
      title: "BITSAT",
      links: [
        "BITSAT 2025 Exam",
        "BITSAT 2025 Exam Dates",
        "BITSAT 2025 Exam Pattern",
        "BITSAT 2025 Syllabus",
        "BITSAT Previous Year Question Papers",
      ],
    },
    {
      title: "GATE",
      links: [
        "GATE 2025 Exam",
        "GATE 2025 Exam Dates",
        "GATE 2025 Exam Pattern",
        "GATE 2025 Syllabus",
        "GATE Previous Year Question Papers",
      ],
    },
    {
      title: "JEE Main",
      links: [
        "JEE Main 2025 Exam",
        "JEE Main 2025 Exam Dates",
        "JEE Main 2025 Exam Pattern",
        "JEE Main 2025 Syllabus",
        "JEE Main Previous Year Question Papers",
      ],
    },
    {
      title: "JEE Advanced",
      links: [
        "JEE Advanced 2025 Exam",
        "JEE Advanced 2025 Exam Dates",
        "JEE Advanced 2025 Exam Pattern",
        "JEE Advanced 2025 Syllabus",
        "JEE Advanced Previous Year Question Papers",
      ],
    },
    {
      title: "SRMJEEE",
      links: [
        "SRMJEEE 2025 Exam",
        "SRMJEEE 2025 Exam Dates",
        "SRMJEEE 2025 Exam Pattern",
        "SRMJEEE 2025 Syllabus",
        "SRMJEEE Previous Year Question Papers",
      ],
    },
    {
      title: "VITEEE",
      links: [
        "VITEEE 2025 Exam",
        "VITEEE 2025 Exam Pattern",
        "VITEEE 2025 Syllabus",
        "VITEEE Previous Year Question Papers",
      ],
    },
    {
      title: "WBJEE",
      links: [
        "WBJEE 2025 Exam",
        "WBJEE 2025 Exam Dates",
        "WBJEE 2025 Exam Pattern",
        "WBJEE 2025 Syllabus",
        "WBJEE Previous Year Question Papers",
      ],
    },
    {
      title: "TANCET",
      links: [
        "TANCET 2025 Exam",
        "TANCET 2025 Exam Dates",
        "TANCET 2025 Exam Pattern",
        "TANCET 2025 Syllabus",
        "TANCET Previous Year Question Papers",
      ],
    },
  ];

  return (
    <div className=" p-4">
      <div className="max-w-screen-lg mx-auto bg-white border border-gray-300 p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-6">
          Related Exams
        </h2>
        <div className="flex flex-wrap justify-between gap-6 text-sm text-gray-800">
          {examData.map((exam, index) => (
            <div
              key={index}
              className="flex-1 min-w-[calc(50%-1.5rem)]  p-4 border border-gray-300 rounded-md"
            >
              <h3 className="font-semibold mb-2">{exam.title}</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 list-disc pl-5">
                {exam.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-blue-700 hover:underline inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedExams;

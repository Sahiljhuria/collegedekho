import React from 'react';

const Relatedqu = () => {
  const questions = [
    {
      id: 1,
      question:
        "I'm a 12th Maharashtra board PCB student and I dropped maths. Can I give NIOS for mathematics only and be eligible for MHT CET in PCM for B.Tech?",
      author: "Sahil",
      date: "Updated on Sept-13-2024",
      answer: "No, you cannot opt for only Maths exams through NIOS and be eligible for MT CET PCM B.Tech.",
      responder: "Soham Mitra",
    },
    {
      id: 2,
      question: "DSY CAP 2 help needed for good college",
      author: "Akash",
      date: "Updated on Sept-13-2024",
      answer:
        "You can check out the CAP round 2 cutoff for the different colleges and see which colleges you will be eligible for admission as per the cutoff data.",
      responder: "Soham Mitra",
    },
    {
      id: 1,
      question:
        "I'm a 12th Maharashtra board PCB student and I dropped maths. Can I give NIOS for mathematics only and be eligible for MHT CET in PCM for B.Tech?",
      author: "Sahil",
      date: "Updated on Sept-13-2024",
      answer: "No, you cannot opt for only Maths exams through NIOS and be eligible for MT CET PCM B.Tech.",
      responder: "Soham Mitra",
    },
    {
      id: 2,
      question: "DSY CAP 2 help needed for good college",
      author: "Akash",
      date: "Updated on Sept-13-2024",
      answer:
        "You can check out the CAP round 2 cutoff for the different colleges and see which colleges you will be eligible for admission as per the cutoff data.",
      responder: "Soham Mitra",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 w-full sm:w-[calc(90%-4px)] lg:w-[calc(80%-4px)] xl:w-[calc(70%-4px)] rounded-xl mt-11 mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Related Questions</h1>
      {questions.map((item) => (
        <div
          key={item.id}
          className="border-b border-gray-200 pb-4 mb-4 last:border-none last:mb-4"
        >
          <p className="text-lg sm:text-xl font-semibold">{item.question}</p>
          <p className="text-sm sm:text-base text-gray-500">
            - {item.author}, {item.date}
          </p>
          <div className="mt-2">
            <p className="font-medium">{item.responder} (Content Team):</p>
            <p className="text-sm sm:text-base">{item.answer}</p>
          </div>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Type your answer here..."
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white mb-6 rounded hover:bg-blue-600">
              Post Answer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Relatedqu;

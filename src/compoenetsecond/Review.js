import React from "react";

const reviewsData = [
  {
    id: 1,
    reviewerName: "Kunal",
    course: "B.E in Information Technology",
    year: "2024",
    date: "February 21, 2024 05:15:21",
    title: "Infrastructure Excellence: ARMIET College's Modern Facilities",
    reviewText:
      "ARMIET College boasts modern infrastructure, with state-of-the-art facilities enhancing the learning experience. That's what I like so much and I want to share with everyone.",
    hostelReview:
      "ARMIET College's hostel provides a comfortable and convenient living environment, fostering a sense of community and support among students. That's all I have experienced.",
    infrastructureRating: 5,
    hostelRating: 5,
  },
  {
    id: 2,
    reviewerName: "Omkar Bhagwan Hande",
    course: "B.E in Computer Science",
    year: "2024",
    date: "February 19, 2024 12:29:03",
    title: "Infrastructure of ARMIET College",
    reviewText:
      "College infrastructure is nice for degree students. It is proper for upcoming corporate. All the faculties are well-prepared and very professional.",
    hostelReview:
      "Hostel is not available in ARMIET. It is the main problem for students. Many of the students stay outside the college. But the college provides PG rooms, and their infrastructure is nice. The quality of food is good.",
    infrastructureRating: 4,
    hostelRating: 3,
  },
  {
    id: 1,
    reviewerName: "Kunal",
    course: "B.E in Information Technology",
    year: "2024",
    date: "February 21, 2024 05:15:21",
    title: "Infrastructure Excellence: ARMIET College's Modern Facilities",
    reviewText:
      "ARMIET College boasts modern infrastructure, with state-of-the-art facilities enhancing the learning experience. That's what I like so much and I want to share with everyone.",
    hostelReview:
      "ARMIET College's hostel provides a comfortable and convenient living environment, fostering a sense of community and support among students. That's all I have experienced.",
    infrastructureRating: 5,
    hostelRating: 5,
  },
  {
    id: 2,
    reviewerName: "Omkar Bhagwan Hande",
    course: "B.E in Computer Science",
    year: "2024",
    date: "February 19, 2024 12:29:03",
    title: "Infrastructure of ARMIET College",
    reviewText:
      "College infrastructure is nice for degree students. It is proper for upcoming corporate. All the faculties are well-prepared and very professional.",
    hostelReview:
      "Hostel is not available in ARMIET. It is the main problem for students. Many of the students stay outside the college. But the college provides PG rooms, and their infrastructure is nice. The quality of food is good.",
    infrastructureRating: 4,
    hostelRating: 3,
  },
];

const ReviewCard = ({
  reviewerName,
  course,
  year,
  date,
  title,
  reviewText,
  hostelReview,
  infrastructureRating,
  hostelRating,
}) => {
  return (
    <div className="w-11/12 mx-auto bg-white shadow-md rounded-lg p-10 flex flex-col justify-between">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-gray-500 text-xs">
        By {reviewerName}, {course} | {year}
      </p>
      <p className="text-gray-400 text-xs">{date}</p>
      <div className="overflow-auto flex-1">
        <h4 className="text-xs font-medium mt-2">Infrastructure:</h4>
        <p className="text-gray-600 text-xs">{reviewText}</p>
        <div className="flex items-center mt-1">
          <span className="text-yellow-500 font-bold">{infrastructureRating}★</span>
        </div>
        <h4 className="text-xs font-medium mt-2">Hostel:</h4>
        <p className="text-gray-600 text-xs">{hostelReview}</p>
        <div className="flex items-center mt-1">
          <span className="text-yellow-500 font-bold">{hostelRating}★</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs">
        <a href="#" className="text-blue-500 underline">
          Show Less
        </a>
        <button className="text-gray-500 hover:text-blue-500">Report</button>
      </div>
    </div>
  );
};

const Review = () => {
  return (
    <div className="w-11/12 mx-auto space-y-4 mt-16">
      <div className="w-11/12 mx-auto  rounded-lg p-10 bg-white">
        <p className="font-semibold text-lg mb-4">
          Top Courses at Alamuri Ratnamala Institute of Engineering and Technology
        </p>
        <div className="grid grid-cols-2 gap-2">
          <p className="border border-gray-400 text-sm py-2 px-4 rounded-full text-center">
            Alamuri Ratnamala Institute of Engineering and Technology B.Tech
          </p>
          <p className="border border-gray-400 text-sm py-2 px-4 rounded-full text-center">
            Alamuri Ratnamala Institute of Engineering and Technology MMS
          </p>
          <p className="border border-gray-400 text-sm py-2 px-4 rounded-full text-center">
            Alamuri Ratnamala Institute of Engineering and Technology B.Tech
          </p>
          <p className="border border-gray-400 text-sm py-2 px-4 rounded-full text-center">
            Alamuri Ratnamala Institute of Engineering and Technology MMS
          </p>
        </div>
      </div>
      <div className="w-11/12 mx-auto ">
        <h2 className="text-xl font-bold mb-7 ml-14">
          Alamuri Ratnamala Institute of Engineering and Technology Reviews
        </h2>
        <div className="space-y-4">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;

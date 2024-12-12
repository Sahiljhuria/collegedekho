import React, { useState } from "react";
import collegelogo from "../images/collegedekhologo.c96051fc.svg";
import redarrow from "../images/callsvgOrange.f1c1aae6.svg";
import arrow from "../images/mailOrange.441c4074.svg";
import instagram from "../images/instagram.fde86165.svg";
import facebook from "../images/facebook.a9df139a.svg";
import twitter from "../images/tweeter.d9fb9e15.svg";
import linkedin from "../images/linkedin.98d06e6a.svg";
import youtube from "../images/youtube.7cd62c01.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownData = {
    Colleges: [
      {
        title: "Colleges By Degrees",
        items: [
          "BTech colleges in India",
          "MTech colleges in India",
          "BArch colleges in India",
          "Diploma colleges in India",
          "View All",
        ],
      },
      {
        title: "Colleges By Location",
        items: [
          "Engineering Colleges in Maharashtra",
          "Engineering Colleges in Tamil Nadu",
          "Engineering Colleges in Uttar Pradesh",
          "Engineering Colleges in Karnataka",
          "View All",
        ],
      },
      {
        title: "Colleges By Location",
        items: [
          "Engineering Colleges in Maharashtra",
          "Engineering Colleges in Tamil Nadu",
          "Engineering Colleges in Uttar Pradesh",
          "Engineering Colleges in Karnataka",
          "View All",
        ],
      },
    ],
    Exams: [
      {
        title: "Entrance Exams",
        items: ["JEE Main", "JEE Advanced", "NEET UG", "GATE", "View All"],
      },
      {
        title: "State-Level Exams",
        items: ["MH CET", "AP EAMCET", "KCET", "TANCET", "View All"],
      },
      {
        title: "Colleges By Location",
        items: [
          "Engineering Colleges in Maharashtra",
          "Engineering Colleges in Tamil Nadu",
          "Engineering Colleges in Uttar Pradesh",
          "Engineering Colleges in Karnataka",
          "View All",
        ],
      },
    ],
    "Latest update": [
      {
        title: "Colleges By Degrees",
        items: [
          "BTech colleges in India",
          "MTech colleges in India",
          "BArch colleges in India",
          "Diploma colleges in India",
          "View All",
        ],
      },
      {
        title: "Colleges By Location",
        items: [
          "Engineering Colleges in Maharashtra",
          "Engineering Colleges in Tamil Nadu",
          "Engineering Colleges in Uttar Pradesh",
          "Engineering Colleges in Karnataka",
          "View All",
        ],
      },
      {
        title: "Colleges By Location",
        items: [
          "Engineering Colleges in Maharashtra",
          "Engineering Colleges in Tamil Nadu",
          "Engineering Colleges in Uttar Pradesh",
          "Engineering Colleges in Karnataka",
          "View All",
        ],
      },
    ],
    Courses: [
      {
        title: "Undergraduate Courses",
        items: ["B.Tech", "B.Sc", "B.Com", "BA", "View All"],
      },
      {
        title: "Postgraduate Courses",
        items: ["M.Tech", "MBA", "M.Sc", "MA", "View All"],
      },
      {
        title: "Colleges By Location",
        items: [
          "Engineering Colleges in Maharashtra",
          "Engineering Colleges in Tamil Nadu",
          "Engineering Colleges in Uttar Pradesh",
          "Engineering Colleges in Karnataka",
          "View All",
        ],
      },
    ],
    Careers: [
      {
        title: "Popular Career Options",
        items: [
          "Data Scientist",
          "Software Engineer",
          "Doctor",
          "Chartered Accountant",
          "View All",
        ],
      },
      {
        title: "Emerging Careers",
        items: [
          "AI Specialist",
          "Blockchain Developer",
          "Cloud Architect",
          "Cybersecurity Analyst",
          "View All",
        ],
      },
      {
        title: "Colleges By Location",
        items: [
          "Engineering Colleges in Maharashtra",
          "Engineering Colleges in Tamil Nadu",
          "Engineering Colleges in Uttar Pradesh",
          "Engineering Colleges in Karnataka",
          "View All",
        ],
      },
    ],
    More: [
      {
        title: "Popular Career Options",
        items: [
          "Data Scientist",
          "Software Engineer",
          "Doctor",
          "Chartered Accountant",
          "View All",
        ],
      },
      {
        title: "Emerging Careers",
        items: [
          "AI Specialist",
          "Blockchain Developer",
          "Cloud Architect",
          "Cybersecurity Analyst",
          "View All",
        ],
      },
      {
        title: "Colleges By Location",
        items: [
          "Engineering Colleges in Maharashtra",
          "Engineering Colleges in Tamil Nadu",
          "Engineering Colleges in Uttar Pradesh",
          "Engineering Colleges in Karnataka",
          "View All",
        ],
      },
    ],
  };

  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-2">
        {/* Top Section */}
        <div className="flex justify-between items-center">
          {/* Logo Section */}
        

          {/* Contact Info */}
          <div className="hidden md:flex items-center text-sm font-medium space-x-4">
            <div className="flex gap-1">
              <img src={redarrow} alt="Call Icon" />
              1800-572-9877
            </div>
            <div className="flex gap-1">
              <img src={arrow} alt="Email Icon" />
              hello@collegedekho.com
            </div>
          </div>

          {/* Social Media Links */}
          <div className="hidden md:flex gap-2">
            <p className="mt-2 text-sm">We’re on your favourite socials!</p>
            <div className="flex gap-2">
              <img src={instagram} alt="Instagram" />
              <img src={facebook} alt="Facebook" />
              <img src={linkedin} alt="LinkedIn" />
              <img src={twitter} alt="Twitter" />
              <img src={youtube} alt="YouTube" />
            </div>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Section */}
        <div className="flex gap-[200px] items-center">

        <div className="flex items-center gap-4">
            <img src={collegelogo} className="h-14" alt="CollegeDekho Logo" />
          </div>
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex justify-between mt-4 items-center `}
          >
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 text-sm font-medium gap-10">
              {Object.keys(dropdownData).map((buttonName, index) => (
                <div key={index} className="relative group">
                  <p className="hover:text-yellow-400 cursor-pointer">
                    {buttonName}
                  </p>
                  <div className="absolute left-1/2 top-full mt-2 hidden group-hover:flex bg-white text-black shadow-lg rounded-md p-4 w-[900px] -translate-x-1/2 z-10">
                    {dropdownData[buttonName].map((category, catIndex) => (
                      <div key={catIndex} className="w-1/4 px-2">
                        <p className="font-semibold text-blue-900 mb-2">
                          {category.title}
                        </p>
                        <ul className="space-y-1">
                          {category.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="text-sm hover:text-blue-500 cursor-pointer"
                            >
                              <a href="#" className="block">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

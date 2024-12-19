import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import collegelogo from "../images/collegedekhologo.c96051fc.svg";
import redarrow from "../images/callsvgOrange.f1c1aae6.svg";
import arrow from "../images/mailOrange.441c4074.svg";
import instagram from "../images/instagram.fde86165.svg";
import facebook from "../images/facebook.a9df139a.svg";
import twitter from "../images/tweeter.d9fb9e15.svg";
import linkedin from "../images/linkedin.98d06e6a.svg";
import youtube from "../images/youtube.7cd62c01.svg";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownData = {
    Colleges: [
      { path: "/colleges" }
    ],
    Exams: [
      { path: "/exams" }
    ],
    Courses: [
      { path: "/courses" }
    ],
    Careers: [
      { path: "/careers" }
    ],
    "Latest Update": [
      { path: "/latest-update" }
    ],
    More: [
      { path: "/more" }
    ]
  };

  const handleMenuClick = (menu) => {
    if (activeMenu === menu) {
      setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
    } else {
      setActiveMenu(menu);
      setIsDropdownOpen(true); // Open dropdown
    }
  };

  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* Top Section */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={collegelogo} className="h-12 w-auto" alt="CollegeDekho Logo" />
          </div>

          {/* Contact Info (Hidden on small screens) */}
          <div className="hidden lg:flex items-center text-sm space-x-6">
            <div className="flex items-center gap-2">
              <img src={redarrow} alt="Call Icon" className="h-5 w-5" />
              1800-572-9877
            </div>
            <div className="flex items-center gap-2">
              <img src={arrow} alt="Email Icon" className="h-5 w-5" />
              hello@collegedekho.com
            </div>
          </div>

          {/* Social Links */}
          <div className="hidden lg:flex items-center space-x-2">
            <p className="text-sm">We’re on your favourite socials!</p>
            <div className="flex space-x-2">
              <img src={instagram} alt="Instagram" className="h-6 w-6" />
              <img src={facebook} alt="Facebook" className="h-6 w-6" />
              <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
              <img src={twitter} alt="Twitter" className="h-6 w-6" />
              <img src={youtube} alt="YouTube" className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Navbar Links */}
        <div className="flex justify-between items-center">
          <nav className="flex justify-center items-center text-center space-x-10 mt-4">
            {Object.keys(dropdownData).map((menu, index) => (
              <div
                key={index}
                className="relative"
                onClick={() => handleMenuClick(menu)}
              >
                {/* Menu Item */}
                <p
                  className={`${
                    activeMenu === menu
                      ? "bg-yellow-400 text-blue-900"
                      : "hover:text-yellow-400"
                  } cursor-pointer text-lg p-2 rounded-md`}
                >
                  <Link to={dropdownData[menu][0].path}>{menu}</Link>
                </p>
              </div>
            ))}
          </nav>
        </div>

        {/* Dropdown */}
        {isDropdownOpen && activeMenu && (
          <div className="absolute text-center lg:text-2xl left-1/2 transform -translate-x-1/2 mt-6 bg-white text-black shadow-lg rounded-md w-[80%] z-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 ">
              {dropdownData[activeMenu].map((category, catIndex) => (
                <div key={catIndex}>
                  <ul className="space-y-1">
                    <li
                      key={catIndex}
                      className="text-sm hover:text-blue-500 cursor-pointer lg:text-xl"
                    >
                      <Link to={category.path}>
                        {category.path === "/colleges" ? "Colleges" : ""}
                        {/* Customize the link text based on the category */}
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

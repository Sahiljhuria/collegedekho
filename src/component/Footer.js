import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      {/* Main Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-5">
        {/* More To Explore */}
        <div>
          <h3 className="font-semibold">More To Explore</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Common Application Form</li>
            <li>Job Ready Courses</li>
            <li>Top Admissions</li>
            <li>Scholarships</li>
          </ul>
        </div>

        {/* Tools & Research */}
        <div>
          <h3 className="font-semibold">Tools & Research</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Career Compass</li>
            <li>Write a Review</li>
            <li>QnA Forum</li>
            <li>DU Predictor</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Join Us</li>
          </ul>
        </div>

        {/* Address Section */}
        <div>
          <h4 className="font-semibold">Bengaluru</h4>
          <p className="text-gray-400 mt-2">
            Pride Hulkul, 5th Floor, No 116, Lalbagh Road,
            <br />
            Bengaluru, Karnataka - 560027
          </p>
          <h4 className="font-semibold mt-4">Kolkata</h4>
          <p className="text-gray-400 mt-2">
            Godrej Genesis, 15th floor, 1509, Salt Lake Sector 5, Kolkata, West
            Bengal
          </p>
          <h4 className="font-semibold mt-4">Jaipur</h4>
          <p className="text-gray-400 mt-2">
            6th & 7th Floor, 29, Moji Colony, Calgiri Marg, Malviya Nagar,
            Jaipur, Rajasthan - 302017
          </p>
        </div>

        {/* Gurugram Section */}
        <div>
          <h4 className="font-semibold">Gurugram</h4>
          <p className="text-gray-400 mt-2">
            6th Floor, CollegeDekho Office, Capital Cityscape, Sector 66,
            Gurugram, Haryana - 122002
          </p>
          <h4 className="font-semibold mt-4">Contact</h4>
          <p className="text-gray-400 mt-2">1800-572-9877</p>
          <p className="text-gray-400">hello@collegedekho.com</p>
        </div>
      </div>

      {/* Trending Links Section */}
      <div className="bg-black text-gray-400 text-sm mt-14 py-8">
        <div className="mx-auto px-4">
          {/* Section Headings */}
          <div className="ml-5 mb-8">
            <h6 className="text-white font-semibold mb-4 text-lg">
              Trending Links
            </h6>
            <h6 className="text-white font-semibold mb-4 text-lg">
              Most Viewed Links
            </h6>
            <h6 className="text-white font-semibold text-lg">
              Popular Universities
            </h6>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-5">
            {/* Column 1 */}
            <div>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-white">
                    CUSAT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    MNIT Jaipur
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    NIT Trichy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Tezpur University
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Anna University
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-white">
                    DTU
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    NIT Jalandhar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    PUCHD
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    University of Hyderabad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Jaypee University
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-white">
                    Doon University
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    NIT Jamshedpur
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    TNOU
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    University of Mysore
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-white">
                    FMS Delhi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    NIT Raipur
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    TNAU
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Vidyasagar University
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-white">
                    MMUT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    NIT Silchar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Techno India University
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    VMOU
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-6"></div>

          {/* Footer Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
            <p className="text-gray-500 text-center sm:text-right mt-4 sm:mt-0">
              ©️ 2024 Girnarsoft Education Services Private Limited
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

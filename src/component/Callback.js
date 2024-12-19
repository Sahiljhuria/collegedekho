import React from "react";

const Callback = () => {
  return (
    <div className="flex flex-col my-10 px-4 sm:px-6 lg:px-8"> {/* Consistent padding */}
      <div className="bg-blue-50 py-10 px-5 rounded-lg shadow-sm">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title Section */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 leading-tight">
            Personalised Guidance.
            <br />
            <span className="text-gray-600">Trusted Experts.</span>
          </h1>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Get in touch with our expert counsellors.
          </p>

          {/* Form Section */}
          <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 h-12 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <input
              type="tel"
              placeholder="Mobile"
              className="border border-gray-300 h-12 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 h-12 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <select
              className="border border-gray-300 h-12 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option>Your Stream</option>
              <option>Commerce And Banking</option>
              <option>Design</option>
              <option>Engineering</option>
              <option>Management</option>
              <option>Hotel Management</option>
              <option>Information Technology</option>
              <option>Media and Mass Communication</option>
              <option>Medical</option>
              <option>Retail</option>
              <option>Arts And Humanities</option>
              <option>Law</option>
              <option>Science</option>
              <option>Vocational</option>
              <option>Physical Education</option>
              <option>Education</option>
              <option>Paramedical</option>
              <option>Agriculture</option>
              <option>Nursing</option>
              <option>Pharmacy</option>
              <option>Dental</option>
              <option>Performing Arts</option>
            </select>
          </form>

          {/* Button Section */}
          <div className="flex justify-center">
            <button className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300 text-sm sm:text-base">
              Request for a callback
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-xs sm:text-sm text-gray-500 mt-4 leading-relaxed">
            By proceeding ahead, you expressly agree to the CollegeDekho terms of use and privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Callback;

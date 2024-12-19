import React from "react";

const Wanttolearn = () => {
  return (
    <div className="flex flex-col mb-10"> {/* Explicit spacing */}
      <div className=" py-10 px-5">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title Section */}
          <h1 className=" md:text-xl font-semibold text-gray-800">
             Want to learnmore about college options and to secure an admission now !
            <br />
          </h1>
          <p></p>

          {/* Form Section */}
         
          <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 h-10 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Mobile"
              className="border border-gray-300 h-10 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 h-10 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              className="border border-gray-300 h-10 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Select level</option>
              <option>PG</option>
              <option>Ug</option>
              <option>Diploma</option>
              <option>Ph.D</option>
              <option>Certificate</option>
             
            </select>
            <button className=" bg-blue-500 text-white   rounded-md hover:bg-blue-600">
            Submit Details
          </button>
         
          </form>
         
          {/* Button Section */}
          

          {/* Footer Text */}
          <p className="text-sm text-gray-500 mt-4">
            By proceeding ahead you expressly agree to the CollegeDekho terms
            of use and privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wanttolearn;

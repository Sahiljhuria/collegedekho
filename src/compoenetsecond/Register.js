import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col mb-10"> {/* Explicit spacing */}
      <div className="bg-blue-50 py-10 px-5">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title Section */}
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Register with us
            <br />
            
          </h1>
         

          {/* Form Section */}
          <form className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
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
              <option>Your Stream</option>
              <option>Commerce And Banking</option>
              <option>Design</option>
              <option>Engineering</option>
              <option>Management</option>
              <option>Hotel Management</option>
              <option>Information Technology</option>
             
            </select>
          </form>

          {/* Button Section */}
          <button className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600">
           submit Details
          </button>

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

export default Register;

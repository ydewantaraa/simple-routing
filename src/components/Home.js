import React from "react";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-xl bg-white p-8 rounded shadow-lg">
        <div className="bg-blue-500 rounded-t-lg p-4 mb-6">
          <img
            src="https://img.freepik.com/free-vector/desktop-computer-concept-illustration_114360-16232.jpg"
            alt="Logo"
            className="mx-auto"
          />
        </div>
        <h2 className="text-3xl font-bold text-center mb-4">
          Welcome to Our Website
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Learn More
          </button>
        </div>
        <div className="text-sm text-center mt-4 text-gray-600">
          © 2024 Our Website. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Home;

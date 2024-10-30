"use client";

import { useEffect, useState } from "react";

const CardDetails = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("aadhaarData");
    if (data) {
      const parsedData = JSON.parse(data);
      setDetails(parsedData);
    } else {
      console.log("No data found in localStorage.");
    }
  }, []);

  const handleStartBiometricVerification = async () => {
    window.location.href = "/biometricverification";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">TrustBank</div>
          </div>
        </nav>
      </header>

      {/* Aadhaar Card Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div style={{ width: '60%', margin: 'auto' }} className="shadow-lg rounded-xl border border-gray-200 p-16 flex items-center space-x-8">
          {details ? (
            <>
              <div className="w-32 h-32 border-2 border-blue-500 rounded-lg overflow-hidden">
                {" "}
                {/* Reduced width and height */}
                <img
                  src={`data:image/jpeg;base64,${details?.photoUrl}`}
                  alt="Aadhaar Holder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h1 className="text-xl font-bold text-gray-800 mb-4">
                  Customer Details
                </h1>{" "}
                {/* Adjusted heading size */}
                <div className="space-y-2">
                  {" "}
                  {/* Reduced space between items */}
                  <div className="flex">
                    <h2 className="font-semibold text-gray-700">Name:</h2>
                    <p className="text-gray-600 ml-2">{details.name}</p>
                  </div>
                  <div className="flex">
                    <h2 className="font-semibold text-gray-700">
                      Date of Birth:
                    </h2>
                    <p className="text-gray-600 ml-2">{details.dob}</p>
                  </div>
                  <div className="flex">
                    <h2 className="font-semibold text-gray-700">Gender:</h2>
                    <p className="text-gray-600 ml-2">{details.gender}</p>
                  </div>
                  <div className="flex">
                    <h2 className="font-semibold text-gray-700">Address:</h2>
                    <p className="text-gray-600 ml-2">{details.address}</p>
                  </div>
                  <div className="flex">
                    <h2 className="font-semibold text-gray-700">Aadhaar ID:</h2>
                    <p className="text-gray-600 ml-2">xxxx-xxxx-xxxx-xxxx</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p className="text-gray-600 text-lg">Loading your details...</p>
          )}
        </div>

        {/* Biometric Verification Button */}
        <div className="text-center mt-12">
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            onClick={handleStartBiometricVerification}
          >
            Start Biometric Verification
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">TrustBank</div>
            <p className="mb-4">
              2024 TrustBank - Secure and Fast account opening
            </p>
            <div className="space-x-4">
              <button className="hover:text-white">Privacy Policy</button>
              <button className="hover:text-white">Terms of Service</button>
              <button className="hover:text-white">Contact Us</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CardDetails;

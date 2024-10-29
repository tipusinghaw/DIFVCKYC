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
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {details ? (
        <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-6 w-[600px] h-[350px] flex bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 mb-6">
          <div className="w-38 border-2 border-gray-300 rounded-lg overflow-hidden mr-4">
            <img
              src={`data:image/jpeg;base64,${details?.photoUrl}`}
              alt="Aadhaar Holder"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 ml-2 flex flex-col justify-between">
            <div>
              <div className="flex mt-2">
                <h2 className="font-bold text-gray-800 text-lg">Name:</h2>
                <p className="font-semibold text-gray-600 ml-2 text-lg">{details.name}</p>
              </div>
              <div className="flex mt-2">
                <h2 className="font-bold text-gray-800 text-lg">Date of Birth:</h2>
                <p className="font-semibold text-gray-600 ml-2 text-lg">{details.dob}</p>
              </div>
              <div className="flex mt-2">
                <h2 className="font-bold text-gray-800 text-lg">Gender:</h2>
                <p className="font-semibold text-gray-600 ml-2 text-lg">{details.gender}</p>
              </div>
              <div className="flex mt-2">
                <h2 className="font-bold text-gray-800 text-lg">Address:</h2>
                <p className="font-semibold text-gray-600 ml-2 text-lg">{details.address}</p>
              </div>
              <div className="flex mt-2">
                <h2 className="font-bold text-gray-800 text-lg">Aadhar Id:</h2>
                <p className="font-semibold text-gray-600 ml-2 text-lg">{details.uid}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      
      <button
        className="cursor-pointer py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-indigo-500 hover:bg-indigo-600 transition duration-300"
        onClick={handleStartBiometricVerification}
      >
        Next
      </button>
    </div>
  );
};

export default CardDetails;

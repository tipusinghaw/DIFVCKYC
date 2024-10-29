import { useState } from "react";
import Biometric from "./Biometric";

const BiometricVerification = () => {
  const [loader, setLoader] = useState(false);
  const [captured, setCaptured] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 p-4">
      <div className="flex flex-col mt-24 p-8 border border-solid border-gray-300 rounded-lg shadow-lg bg-white my-8 w-[600px]">
        <h1 className="text-indigo-700 font-bold text-2xl mb-2 text-center">
          Biometric Verification
        </h1>
        <p className="text-gray-700 mb-6 text-center">Step: 2 of 2</p>
        
        <div className="flex justify-center mb-6">
          <img
            className="w-[200px] h-[200px] object-cover rounded-full border-4 border-indigo-300"
            src="https://sharedp.com/wp-content/uploads/2024/06/cartoon-profile-pic-girl-960x1024.jpg"
            alt="Profile"
          />
        </div>
        
        <div className="flex flex-col items-center">
          <Biometric
            onCapture={(img: any) => {
              setLoader(true);
              setCaptured(img);
              setTimeout(() => {
                setLoader(false);
              }, 500);
            }}
          />
          
          
          {captured && (
            <img
              src={captured}
              alt="Captured"
              className="w-[150px] h-[150px] object-cover rounded-full mt-4 border-2 border-gray-300"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BiometricVerification;

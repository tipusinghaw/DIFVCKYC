import { useEffect, useState } from "react";
import Biometric from "./Biometric";
import { imageCompare } from "./imageCompare";

const BiometricVerification = () => {
  const [details, setDetails] = useState(null);
  const [loader, setLoader] = useState(false);
  const [captured, setCaptured] = useState(null);
  const [verificationMessage, setVerificationMessage] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("aadhaarData");

    if (data) {
      const parsedData = JSON.parse(data);
      setDetails(parsedData);
    } else {
      console.log("No data found in localStorage.");
    }
  }, []);

  const handleCapture = async (img: any) => {
    setLoader(true);
    setCaptured(img);

    // Compare faces after capturing
    // const similarity = await imageCompare(details?.photoUrl, img);
    // console.log("similarity4567:::", similarity);
    // setLoader(false);

    // if (similarity > 0.95) {
    //   setVerificationMessage("KYC process is completed.");
    // } else {
    //   setVerificationMessage("KYC verification failed.");
    // }
    window.location.href = '/kyccompleted'
  };

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
            src={`data:image/jpeg;base64,${details?.photoUrl}`}
            alt="Profile"
          />
        </div>

        <div className="flex flex-col items-center">
          <Biometric onCapture={handleCapture} />

          {captured && (
            <img
              src={captured}
              alt="Captured"
              className="w-[150px] h-[150px] object-cover rounded-full mt-4 border-2 border-gray-300"
            />
          )}

          {verificationMessage && (
            <p className="mt-4 text-green-600">{verificationMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BiometricVerification;

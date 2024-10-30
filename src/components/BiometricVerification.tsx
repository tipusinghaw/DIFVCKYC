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

  const handleCapture = async (img) => {
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
    window.location.href = '/kyccompleted';
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">TrustBank</div>
            <div className="space-x-8">
              <button className="text-gray-600 hover:text-blue-600">Personal</button>
              <button className="text-gray-600 hover:text-blue-600">Business</button>
              <button className="text-gray-600 hover:text-blue-600">About</button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Login
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-gray-50 p-4">
        <div className="flex flex-col mt-24 p-8 border border-solid border-gray-300 rounded-lg shadow-lg bg-white my-8 w-11/12 md:w-2/3 lg:w-1/2">
          <h1 className="text-blue-600 font-bold text-2xl mb-2 text-center">
            Biometric Verification
          </h1>
          <p className="text-gray-700 mb-6 text-center">Step: 2 of 2</p>

          <div className="flex justify-center mb-6">
            <img
              className="w-56 h-56 object-cover rounded-full border-4 border-blue-300"
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
                className="w-36 h-36 object-cover rounded-full mt-4 border-2 border-gray-300"
              />
            )}

            {verificationMessage && (
              <p className="mt-4 text-green-600">{verificationMessage}</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">TrustBank</div>
            <p className="mb-4">© 2024 TrustBank - Secure and Fast Aadhaar Verification</p>
            <div className="space-x-4">
              <button className="hover:text-white">Privacy Policy</button>
              <button className="hover:text-white">Terms of Service</button>
              <button className="hover:text-white">Contact Us</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BiometricVerification;

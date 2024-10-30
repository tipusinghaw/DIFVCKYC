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
    setVerificationMessage("Image verification is in process...");

    setTimeout(() => {
      setCaptured(img);
      setLoader(false);
      setVerificationMessage("KYC process is completed.");
      // Redirect to KYC completion page
      window.location.href = "/kyccompleted";
    }, 8000);

    // Optional face comparison code
    // const similarity = await imageCompare(details?.photoUrl, img);
    // setLoader(false);
    // if (similarity > 0.95) {
    //   setVerificationMessage("KYC process is completed.");
    // } else {
    //   setVerificationMessage("KYC verification failed.");
    // }
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold text-blue-600">TrustBank</div>
          </div>
        </nav>
      </header>

      <div className="min-h-screen flex flex-col items-center bg-[url('https://images.unsplash.com/photo-1601004360613-df96ed93c888')] bg-cover bg-center p-4">
        <div className="flex flex-col mt-24 p-8 border border-solid border-gray-300 rounded-lg shadow-xl bg-[#f0f9ff] opacity-90 hover:opacity-100 transition duration-300 my-8 w-11/12 md:w-2/3 lg:w-1/2">
          <h1 className="text-blue-700 font-bold text-3xl mb-2 text-center">
            Biometric Verification
          </h1>
          <p className="text-gray-600 mb-6 text-center text-lg">Step: 2 of 2</p>

          <div className="flex justify-center mb-6">
            <img
              className="w-64 h-64 object-cover rounded-full border-4 border-blue-400 shadow-lg"
              src={`data:image/jpeg;base64,${details?.photoUrl}`}
              alt="Profile"
            />
          </div>

          <div className="flex flex-col items-center">
            <Biometric onCapture={handleCapture} />

            {loader && (
              <div className="flex flex-col items-center mt-4">
                <div className="loader border-t-4 border-blue-400 border-solid rounded-full w-12 h-12 animate-spin"></div>
                <p className="text-blue-600 font-semibold mt-2">
                  Image verification is in process...
                </p>
              </div>
            )}

            {captured && !loader && (
              <img
                src={captured}
                alt="Captured"
                className="w-48 h-48 object-cover rounded-full mt-4 border-4 border-blue-400 shadow-lg"
              />
            )}

            {verificationMessage && !loader && (
              <p className="mt-4 text-green-600 font-semibold">
                {verificationMessage}
              </p>
            )}
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-4">TrustBank</div>
            <p className="mb-4">2024 TrustBank- Secure and Fast </p>
            <div className="space-x-4">
              <button className="hover:text-white transition duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-white transition duration-300">
                Terms of Service
              </button>
              <button className="hover:text-white transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BiometricVerification;

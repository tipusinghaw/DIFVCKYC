import axios from "axios";
import { useEffect, useState } from "react";

const KYCCompleted = () => {
  const [details, setDetails] = useState(null);

  const myApiKey =
    "sk_staging_5YV5T8355LLd2Htb6JQ6P9WjrApd8Vv8fT9s1TPkfWKBGXdsCPYWVqk3c4AMUT6jNt9CyeDUVbsxuNr9BuFSV6UzEuibUt4U8L7T6wBzf3tTUN4FmBHU7yggMBYhDCAuMsNPpoADskMzCM2c4a23o5GNuYs68Uhff9XKQFNAoTA9CZTAE4ue7uohvj8YqaHRjDmj33iCRPi8EwPB66YTTb4G"; // Replace with key from step 2

  useEffect(() => {
    const data = localStorage.getItem("aadhaarData");

    if (data) {
      const parsedData = JSON.parse(data);
      setDetails(parsedData);
    } else {
      console.log("No data found in localStorage.");  
    }
  }, []);

  const issueCredential = () => {
    const userEmail = "bhavana.karwade@ayanworks.com"; 
    const templateId = "aeb5d5ca-e367-449e-b681-da17c75af532"; 
  
    const subject = details;
    const credentialParams = {
      email: userEmail,
      credential: {
        subject,
        expiresAt: "2034-02-02",
      },
    };
  
    console.log('credentialParams567:::', credentialParams);
    
    const options = {
      headers: {
        "X-API-KEY": myApiKey,
        "Content-Type": "application/json",
      },
    };
  
    axios.post(`http://localhost:5002/crossmint/issue-credential`, credentialParams, options)
      .then((response) => {
        console.log("Credential Response:", response.data);
        alert("Your credentials have been issued successfully!");
      })
      .catch((err) => console.error("Error issuing credential:", err));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      {/* Header/Navigation */}
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

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <div className="flex flex-col p-8 border border-solid border-gray-300 rounded-lg shadow-lg bg-white my-8 w-96">
          <h1 className="text-indigo-700 font-bold text-2xl mb-4 text-center">
            KYC Process Completed
          </h1>
          <p className="text-gray-700 mb-6 text-center">
            Your KYC process has been successfully completed! 
          </p>
          <button 
            className="mt-4 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200" 
            onClick={issueCredential}
          >
            Get Your Credentials
          </button>
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
    </div>
  );
};

export default KYCCompleted;

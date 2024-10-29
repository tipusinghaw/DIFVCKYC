import { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
import * as zip from "@zip.js/zip.js";
import xml2js from "xml2js";

export default function BankPortal() {
  const [file, setFile] = useState<File | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isReceived, setIsReceived] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [qrCodeValue, setQRCodeValue] = useState("");
  const [step, setStep] = useState(1);
  const [aadhaarData, setAadhaarData] = useState({});
  const [extractedFiles, setExtractedFiles] = useState<any>([]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      e.preventDefault();
      const selectedFile = e.target.files?.[0];
      if (!selectedFile) {
        console.error("No file selected");
        return;
      }

      setFile(selectedFile);

      const reader = new zip.ZipReader(new zip.BlobReader(selectedFile), {
        password,
      });

      const entries = await reader.getEntries();
      const extractedEntries = [];

      for (const entry of entries) {
        if (!entry.directory) {
          const text = await entry.getData(new zip.TextWriter());
          const parser = new xml2js.Parser();
          try {
            const result = await parser.parseStringPromise(text);
            console.log('resilt456LLL', result)
            const extractedData = result.OfflinePaperlessKyc.UidData[0];
            console.log('extractedData5678:::', extractedData)
            // Extract necessary Aadhaar details and set them in state
            const addressData = extractedData.Poa[0].$;
            const completeAddress = [
              addressData.careof,
              addressData.house,
              addressData.street,
              addressData.loc,
              addressData.dist,
              addressData.state,
              addressData.country,
              addressData.pc,
            ]
              .filter((part) => part)
              .join(", ");

              const newAadhaarData = {
                name: extractedData.Poi[0].$.name,
                uid: extractedData.Poi[0].$.uid,
                address: completeAddress,
                dob: extractedData.Poi[0].$.dob,
                gender: extractedData.Poi[0].$.gender,
                photoUrl: extractedData.Pht[0],
              };
  
              setAadhaarData(newAadhaarData);
              localStorage.setItem("aadhaarData", JSON.stringify(newAadhaarData));

            extractedEntries.push(extractedData);
          } catch (err) {
            console.error("Failed to parse XML:", err);
          }
        }
      }
 
      setExtractedFiles(extractedEntries);
      setIsReceived(true);

    } catch (error) {
      console.error("Error handling file:", error);
    }
  };
  
  const handleNext = () => {
    if (aadhaarData) {
      window.location.href = "/carddetails";
    } else {
      console.log("aadhaarData is null or undefined");
    }
  };
  
  const showComponent = (selectedStep: number) => {
    switch (selectedStep) {
      case 1:
        return (
          <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
            <div className="flex flex-col p-10 lg:p-16 my-8 border border-solid border-gray-300 rounded-2xl shadow-lg bg-white w-full lg:w-[600px] h-[600px] lg:h-[800px]">
              <h1 className="text-2xl lg:text-3xl font-bold text-indigo-700 mb-3 mt-0 text-center animate-pulse">
                Aadhaar Verification
              </h1>
              <p className="text-gray-600 text-center text-sm lg:text-base mb-6 mt-0">Step: 1 of 2</p>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none border border-gray-300 rounded-lg w-full py-3 lg:py-4 px-8 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:ring-indigo-300 focus:ring-2 transition duration-300"
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="appearance-none border border-gray-300 rounded-lg w-full py-3 lg:py-4 px-8 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:ring-indigo-300 focus:ring-2 transition duration-300"
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mt-6">
                <label className="block text-gray-700 text-sm font-bold mb-2 cursor-pointer" htmlFor="file">
                  <p className="mb-4">Select File</p>
                  <input
                    className="hidden"
                    id="file"
                    type="file"
                    accept=".zip"
                    onChange={handleFileChange}
                  />
                  <div className="p-16 border-2 border-dashed rounded-xl flex justify-center items-center border-indigo-400 transition hover:border-indigo-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-10 h-10 text-indigo-500 hover:text-indigo-700 transition duration-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                      />
                    </svg>
                  </div>
                </label>
                {file?.name && (
                  <div className="flex justify-between items-center bg-green-100 border border-green-400 text-green-800 px-4 py-2 rounded-lg mt-4">
                    {file?.name}
                    <svg
                      onClick={() => {
                        setFile(null);
                        setIsReceived(false);
                        setPassword("");
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="cursor-pointer w-6 h-6 text-red-500 hover:text-red-700 transition duration-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                )}

                <div className="flex justify-center mt-8 w-full">
                  {isReceived ? (
                    <button
                      className="cursor-pointer py-3 lg:py-4 px-12 w-full lg:px-16 text-white font-semibold rounded-lg bg-indigo-500 hover:bg-indigo-600 transition duration-300"
                      onClick={handleNext} // Use handleNext here
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      className="cursor-pointer mt-8 py-3 w-full lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-indigo-500 hover:bg-indigo-600 transition duration-300"
                      onClick={() => document.getElementById('file')?.click()} // Trigger file input click
                    >
                      Browse
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {showComponent(step)}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-lg font-medium">Terms</h3>
            <p>
              By using this service, you agree to our terms and conditions.
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

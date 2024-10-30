import { useEffect, useState } from "react";
import { Shield, Upload, X, ChevronRight, AlertCircle } from "lucide-react";
import * as zip from "@zip.js/zip.js";
import xml2js from "xml2js";

export default function BankVerificationPortal() {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isReceived, setIsReceived] = useState(false);
  const [aadhaarData, setAadhaarData] = useState({});
  const [extractedFiles, setExtractedFiles] = useState([]);
  const [error, setError] = useState("");

  const handleFileChange = async (e) => {
    try {
      e.preventDefault();
      setError("");
      const selectedFile = e.target.files?.[0];
      if (!selectedFile) {
        setError("No file selected");
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
            const extractedData = result.OfflinePaperlessKyc.UidData[0];
            
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
            setError("Failed to parse verification data");
            console.error("Failed to parse XML:", err);
          }
        }
      }

      setExtractedFiles(extractedEntries);
      setIsReceived(true);
    } catch (error) {
      setError("Error processing file. Please check your password and try again.");
      console.error("Error handling file:", error);
    }
  };

  const handleNext = () => {
    if (aadhaarData) {
      window.location.href = "/carddetails";
    } else {
      setError("Verification data not found");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">TrustBank Verification</span>
            </div>
            <div className="text-sm text-gray-500">Need help? Contact support</div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-12">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            {/* Progress Header */}
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900">Account Verification</h1>
              {/* <div className="mt-4 flex items-center justify-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">1</div>
                <div className="w-16 h-1 bg-blue-600"></div>
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center font-semibold">2</div>
              </div> */}
              <p className="mt-4 text-gray-600">Step 1: Identity Verification</p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center text-red-600">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
                  Verification Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter verification password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Verification Document
                </label>
                <div className="mt-1">
                  <div 
                    className="border-2 border-dashed border-gray-300 rounded-lg px-6 py-10 text-center hover:border-blue-500 transition-colors cursor-pointer"
                    onClick={() => document.getElementById('file-upload').click()}
                  >
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      accept=".zip"
                      onChange={handleFileChange}
                    />
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-4">
                      <span className="text-sm font-medium text-blue-600 hover:text-blue-500">
                        Upload a file
                      </span>
                      <span className="text-sm text-gray-500"> or drag and drop</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">ZIP file up to 10MB</p>
                  </div>
                </div>

                {file?.name && (
                  <div className="mt-4 flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg px-4 py-3">
                    <span className="text-sm text-blue-700">{file.name}</span>
                    <button
                      onClick={() => {
                        setFile(null);
                        setIsReceived(false);
                        setPassword("");
                      }}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>

              <div className="pt-6">
                <button
                  onClick={isReceived ? handleNext : () => document.getElementById('file-upload').click()}
                  className="w-full flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {isReceived ? (
                    <>
                      Continue to Next Step
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </>
                  ) : (
                    'Select Verification File'
                  )}
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-gray-500">
          <p>© 2024 TrustBank. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <button className="hover:text-blue-600">Privacy Policy</button>
            <button className="hover:text-blue-600">Terms of Service</button>
            <button className="hover:text-blue-600">Security</button>
          </div>
        </footer>
      </div>
    </div>
  );
}
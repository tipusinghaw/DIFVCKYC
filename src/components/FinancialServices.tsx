"use client";

import { useEffect, useState } from "react";
import { FaCreditCard, FaMoneyCheck, FaUniversity } from "react-icons/fa";
import {
  credentialSchema,
  domain,
  issuerId,
  nft,
  primaryType,
  proofPurpose,
  proofType,
  proofValue,
  verifiableCredential,
  verificationMethod,
} from "../config/commonConstants";
import { envConfig } from "../config/envConfig";

const FinancialServices = () => {
  const [showModal, setShowModal] = useState(false);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("aadhaarData");

    if (data) {
      const parsedData = JSON.parse(data);
      setDetails(parsedData);
    } else {
      console.error("No data found in localStorage.");
    }
  }, []);

  const handleLoanApplication = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleVerifyCredentials = async () => {
    const credentialId = localStorage.getItem("credentialId");

    // Dynamically create the CredentialSubject array based on the keys in details
    const credentialSubjectSchema = details
      ? Object.keys(details).map((key) => ({ name: key, type: "string" }))
      : [];

    const verifyCred = {
      id: credentialId,
      credentialSubject: {
        details,
      },
      validUntil: "2034-02-02",
      nft: {
        tokenId: nft.TOKEN_ID,
        chain: nft.CHAIN,
        contractAddress: nft.CONTRACT_ADDRESS,
      },
      issuer: {
        id: issuerId,
      },
      type: [verifiableCredential, envConfig.PUBLIC_SCHEMA_ID],
      validFrom: "2024-10-18T18:29:36.551Z",
      "@context": [credentialSchema],
      proof: {
        verificationMethod: verificationMethod,
        created: "2024-10-18T18:29:36.551Z",
        proofPurpose: proofPurpose,
        type: proofType,
        proofValue: proofValue,
        eip712: {
          domain: {
            name: domain.NAME,
            version: domain.VERSION,
            chainId: domain.CHAINID,
            verifyingContract: domain.VERIFYING_CONTRACT,
          },
          types: {
            VerifiableCredential: [
              { name: "@context", type: "string[]" },
              { name: "type", type: "string[]" },
              { name: "id", type: "string" },
              { name: "issuer", type: "Issuer" },
              { name: "credentialSubject", type: "CredentialSubject" },
              { name: "validFrom", type: "string" },
              { name: "validUntil", type: "string" },
              { name: "nft", type: "Nft" },
            ],
            CredentialSubject: credentialSubjectSchema,
            Issuer: [{ name: "id", type: "string" }],
            Nft: [
              { name: "tokenId", type: "string" },
              { name: "contractAddress", type: "string" },
              { name: "chain", type: "string" },
            ],
          },
          primaryType: primaryType,
        },
      },
    };

    try {
      const response = await fetch(
        `${envConfig.PUBLIC_BASE_URL}/crossmint/verify-credential`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(verifyCred),
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log("Verification successful:", result);
        window.location.href = "/stepper";
      } else {
        console.error("Verification failed:", result);
      }
    } catch (error) {
      console.error("Error occurred while verifying credentials:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">TrustBank</div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-blue-600 mb-10 text-center animate-fadeIn">
          Financial Services
        </h1>
        <div className="flex justify-center pt-1 pb-6">
          <p className="text-[24px] font-extrabold">Account Balance:</p>{" "}
          <span
            style={{ alignContent: "center" }}
            className="ml-2 ustify-center item-center text-lg font-normal"
          >
            0 $
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div
            className="bg-[#bfdbfe] shadow-lg rounded-xl border border-gray-200 p-12 flex items-center space-x-6 mb-8 cursor-pointer hover:bg-blue-100 transition duration-300  ease-in-out"
            onClick={handleLoanApplication}
          >
            <FaUniversity className="text-blue-600 text-4xl animate-bounce" />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800">
                Apply for Loan
              </h2>
              <p className="text-gray-600">
                Get financial assistance with easy loan options.
              </p>
            </div>
          </div>

          <div className="bg-[#bfdbfe] shadow-lg rounded-xl border border-gray-200 p-12 flex items-center space-x-6 mb-8 cursor-pointer hover:bg-blue-100 transition duration-300 ease-in-out">
            <FaCreditCard className="text-blue-600 text-4xl animate-bounce" />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800">
                Apply for Credit Card
              </h2>
              <p className="text-gray-600">
                Enjoy spending freedom with our credit card options.
              </p>
            </div>
          </div>

          <div className="bg-[#bfdbfe] shadow-lg rounded-xl border border-gray-200 p-12 flex items-center space-x-6 mb-8 cursor-pointer hover:bg-blue-100 transition duration-300 ease-in-out">
            <FaMoneyCheck className="text-blue-600 text-4xl animate-bounce" />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800">
                Apply for Debit Card
              </h2>
              <p className="text-gray-600">
                Secure and convenient access to your funds.
              </p>
            </div>
          </div>

          <div className="bg-[#bfdbfe] shadow-lg rounded-xl border border-gray-200 p-12 flex items-center space-x-6 mb-8 cursor-pointer hover:bg-blue-100 transition duration-300 ease-in-out">
            <FaMoneyCheck className="text-blue-600 text-4xl animate-bounce" />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800">
                Account Opening
              </h2>
              <p className="text-gray-600">
                Secure and convenient access to your funds.
              </p>
            </div>
          </div>

          <div className="bg-[#bfdbfe] shadow-lg rounded-xl border border-gray-200 p-12 flex items-center space-x-6 mb-8 cursor-pointer hover:bg-blue-100 transition duration-300 ease-in-out">
            <FaMoneyCheck className="text-blue-600 text-4xl animate-bounce" />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800">
                Account Recovery
              </h2>
              <p className="text-gray-600">
                Secure and convenient access to your funds.
              </p>
            </div>
          </div>

          <div className="bg-[#bfdbfe] shadow-lg rounded-xl border border-gray-200 p-12 flex items-center space-x-6 mb-8 cursor-pointer hover:bg-blue-100 transition duration-300 ease-in-out">
            <FaMoneyCheck className="text-blue-600 text-4xl animate-bounce" />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800">
                Subscription services
              </h2>
              <p className="text-gray-600">
                Secure and convenient access to your funds.
              </p>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-[600px] h-auto flex flex-col items-center">
            <img
              src={`data:image/jpeg;base64,${details?.photoUrl}`}
              alt="Profile Photo"
              className="w-32 h-32 rounded-full mb-4 shadow-lg border-4 border-blue-600"
            />
            <h2 className="text-3xl font-bold text-blue-600 mb-2">
              {details?.name}
            </h2>
            <p className="text-gray-700 text-sm italic mb-6">
              Raigarh, Maharashtra, India
            </p>

            <div className="w-full bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-6 shadow-md mb-4">
              <div className="mb-4">
                <p className="text-lg font-semibold text-gray-800">Address:</p>
                <p className="text-gray-700">{details?.address}</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-semibold text-gray-800">
                  Date of Birth:
                </p>
                <p className="text-gray-700">{details?.dob}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">Gender:</p>
                <p className="text-gray-700">{details?.gender}</p>
              </div>
            </div>

            <div className="w-full mt-4 mb-6">
              <label
                htmlFor="loanAmount"
                className="text-lg font-semibold text-gray-800 block mb-2"
              >
                Loan Amount
              </label>
              <input
                type="number"
                id="loanAmount"
                name="loanAmount"
                placeholder="Enter loan amount"
                className="w-full px-4 py-3 border border-blue-600 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              />
            </div>

            <button
              onClick={handleVerifyCredentials}
              className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Start Loan Process
            </button>

            <button
              onClick={handleCloseModal}
              className="mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <footer className="text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">TrustBank</div>
            <p className="mb-4">
              © 2024 TrustBank - Secure and Fast Financial Services
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

export default FinancialServices;

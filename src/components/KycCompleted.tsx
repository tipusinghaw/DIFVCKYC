import axios from "axios";
import { useEffect, useState } from "react";

const KYCCompleted = () => {
  const [details, setDetails] = useState(null);
  const [credentialData, setCredentialData] = useState(null);
  const [isKycProcessed, setIsKycProcessed] = useState(false); // State to manage visibility

  const myApiKey =
    "sk_staging_5YV5T8355LLd2Htb6JQ6P9WjrApd8Vv8fT9s1TPkfWKBGXdsCPYWVqk3c4AMUT6jNt9CyeDUVbsxuNr9BuFSV6UzEuibUt4U8L7T6wBzf3tTUN4FmBHU7yggMBYhDCAuMsNPpoADskMzCM2c4a23o5GNuYs68Uhff9XKQFNAoTA9CZTAE4ue7uohvj8YqaHRjDmj33iCRPi8EwPB66YTTb4G";
  useEffect(() => {
    const data = localStorage.getItem("aadhaarData");

    if (data) {
      const parsedData = JSON.parse(data);
      setDetails(parsedData);
    } else {
      console.log("No data found in localStorage.");
    }
  }, []);

  const handleNextPage = () => {
    window.location.href = '/financialservices';
  }
  const issueCredential = () => {
    const userEmail = "bhavana.karwade@ayanworks.com";
    const templateId = "27d2ebd4-fa1b-458b-9447-3ade918cba33";

    const subject = details;
    const credentialParams = {
      email: userEmail,
      templateId,
      credential: {
        subject,
        expiresAt: "2034-02-02",
      },
    };

    console.log("credentialParams567:::", credentialParams);

    const options = {
      headers: {
        "X-API-KEY": myApiKey,
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        `http://localhost:5003/crossmint/issue-credential`,
        credentialParams,
        options
      )
      .then((response) => {
        console.log("Credential Response:", response.data);
        alert("Your credentials have been issued successfully!");

        const credentialId = response?.data?.credentialId;
        if (response?.status === 201) {
          // Replace axios.get with static response data
          return Promise.resolve({
            data: {
              value: {
                id: credentialId || "<CREDENTIAL_ID>",
                credentialSubject: {
                  name: "Bhavana Pramod Karwade",
                  address:
                    "C/O Gajanan Karwade, House No. 1551-A, Kakar Tale, Raigarh, Maharashtra, India, 402301",
                  dob: "26-07-2001",
                  gender: "F",
                  photoUrl:
                    "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",
                },
                nft: {
                  tokenId: "<tokenId>",
                  chain: "polygon",
                  contractAddress: "<collection_contract_address>",
                },
                expirationDate: "2234-12-12",
                "@context": [
                  "https://www.w3.org/2018/credentials/v1",
                  "https://github.com/haardikk21/ethereum-eip712-signature-2021-spec/blob/main/index.html",
                ],
                issuer: {
                  id: "did:0xISSUER_ADDRESS",
                },
                type: ["VerifiableCredential", "64f0c05641a512c86786fd3b"],
                issuanceDate: "2023-08-31T16:34:33.854Z",
                proof: {
                  proofValue: "ProofValue",
                  "...additional required fields": "...",
                },
              },
            },
          });
        }
      })
      .then((secondApiResponse) => {
        console.log("Second API Response:", secondApiResponse?.data);
        setCredentialData(secondApiResponse.data.value); // Set the credential data
        setIsKycProcessed(true); // Set KYC processed to true to show the card
      })
      .catch((err) => console.error("Error issuing credential:", err));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">TrustBank</div>
          </div>
        </nav>
      </header>

      <div className="flex flex-col items-center justify-center flex-grow p-4">
        {!isKycProcessed ? (
          <div className="flex flex-col p-12 border border-solid border-gray-300 rounded-lg shadow-lg bg-white my-8 w-full max-w-lg text-center animate-slideIn">
            <h1 className="text-blue-700 font-bold text-2xl mb-4">
              KYC Process Completed
            </h1>
            <p className="text-gray-700 mb-6">
              Your KYC process has been successfully completed!
            </p>
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
              onClick={issueCredential}
            >
              Get Your Credentials
            </button>
          </div>
        ) : null}

        {credentialData && isKycProcessed && (
          <>
            <div className="flex items-center space-x-4 animate-scaleUp">
              <img
                src="https://i.pinimg.com/736x/5c/6a/99/5c6a9983d0c9eef8b3912a451cc8a27d.jpg"
                alt="Success Icon"
                className="w-16 h-16 object-contain"
              />

              <h1 className="text-3xl font-bold text-blue-600">
                Your Aadhaar is verified successfully
              </h1>
            </div>
            <div className="bg-blue-100 shadow-lg rounded-xl border border-gray-200 p-8 flex flex-col items-center space-y-8 mt-6 animate-fadeIn">
              <div className="flex items-center space-x-4 animate-scaleUp">
                <div className="w-32 h-32 border-2 border-blue-500 rounded-lg overflow-hidden">
                  <img
                    src={`data:image/jpeg;base64,${credentialData.credentialSubject.photoUrl}`}
                    alt="Aadhaar Holder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="bg-blue-100 py-6 px-8 text-gray-700 text-lg max-w-xl w-full animate-slideIn">
                <div className="flex mb-4">
                  <span className="font-semibold">Full name:</span>
                  <span className="ml-4">
                    {credentialData.credentialSubject.name}
                  </span>
                </div>
                <div className="flex mb-4">
                  <span className="font-semibold">Date of Birth:</span>
                  <span className="ml-4">
                    {credentialData.credentialSubject.dob}
                  </span>
                </div>
                <div className="flex mb-4">
                  <span className="font-semibold">Gender:</span>
                  <span className="ml-4">
                    {credentialData.credentialSubject.gender}
                  </span>
                </div>
                <div className="flex mb-4">
                  <span className="font-semibold">Address:</span>
                  <span className="ml-4">
                    {credentialData.credentialSubject.address}
                  </span>
                </div>
                <div className="flex">
                  <span className="font-semibold">Aadhaar ID:</span>
                  <span className="ml-4">xxxx-xxxx-xxxx-xxxx</span>
                </div>
              </div>

              <div className="text-gray-500 text-xl animate-fadeIn">
                <p>
                  <span
                    className="underline cursor-pointer text-blue-600"
                    onClick={handleNextPage}
                  >
                    Click here
                  </span>{" "}
                  to receive your reusable KYC credential
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default KYCCompleted;

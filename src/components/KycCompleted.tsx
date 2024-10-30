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
                    "https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
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

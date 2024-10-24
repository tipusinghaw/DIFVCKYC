import { useState } from "react";
import { QRCode } from "react-qrcode-logo";
import Biometric from "./Biometric";
import { Button, Modal } from "flowbite-react";
import JSZip from "jszip";

export default function BankPortal() {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [isReceived, setIsReceived] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [qrCodeValue, setQRCodeValue] = useState("");
  const [step, setStep] = useState(1);
  const [captured, setCaptured] = useState<string | null>(null);
  const [loader, setLoader] = useState(false);

  const handleFileChange = (e: any) => {
    const reader = new FileReader();
    const selectedFile = e.target.files[0];
    console.log("selected file", selectedFile);
    setFile(selectedFile);
    e?.preventDefault();
  };

  const handleUpload = async () => {
    if (file) {
      console.log("File uploaded:", file);
      setIsReceived(true);

      const zip = new JSZip();
      const reader = new FileReader();

      reader.onload = async (event) => {
        const buffer = event.target?.result;

        if (buffer) {
          try {
            const unzipped = await zip.loadAsync(buffer, {
              password: "0000",
            } as any);

            unzipped.forEach(
              async (relativePath: string, file: JSZip.JSZipObject) => {
                const extractedFile = await file.async("blob");
                console.log(`Extracted file: ${relativePath}`);

                const url = URL.createObjectURL(extractedFile);
                window.open(url);
              }
            );
          } catch (error) {
            console.error("Error while unzipping:", error);
            alert("Incorrect password or unable to unzip the file.");
          }
        } else {
          console.error("Failed to read file as buffer.");
        }
      };

      reader.readAsArrayBuffer(file);
    } else {
      console.log("No file selected");
    }
  };

  const showComponent = (selectedStep: number) => {
    switch (selectedStep) {
      case 1:
        return (
          <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
            <div className="flex flex-col p-10 lg:p-16 my-8 border border-solid border-gray-300 rounded-2xl shadow-lg bg-white transform transition-transform hover:scale-105 duration-300 w-full lg:w-[600px] h-[600px] lg:h-[800px]">

              <h1 className="text-2xl lg:text-3xl font-bold text-indigo-700 mb-3 mt-0 text-center animate-pulse">
                Aadhaar Verification
              </h1>
              <p className="text-gray-600 text-center text-sm lg:text-base mb-6 mt-0">
                Step: 1 of 2
              </p>

              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none border border-gray-300 rounded-lg w-full py-3 lg:py-4 px-8 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:ring-indigo-300 focus:ring-2 transition duration-300"
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mt-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
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
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 cursor-pointer"
                  htmlFor="file"
                >
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
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-10 h-10 text-indigo-500 hover:text-indigo-700 transition duration-300"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="cursor-pointer w-6 h-6 text-red-500 hover:text-red-700 transition duration-300"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                )}

                {!isReceived && (
                  <button
                    className="cursor-pointer mt-8 py-3 w-full lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-indigo-500 hover:bg-indigo-600 transition duration-300"
                    onClick={handleUpload}
                  >
                    Browse
                  </button>
                )}
              </div>

              <div className="flex justify-center mt-8 w-full">
                {isReceived && (
                  <button
                    className="cursor-pointer py-3 lg:py-4 px-12 w-full lg:px-16 text-white font-semibold rounded-lg bg-indigo-500 hover:bg-indigo-600 transition duration-300"
                    // onClick={handleConfirm}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="min-h-screen flex flex-col items-center">
            <div className="flex flex-col p-16 my-8 border border-solid border-gray-500">
              <h1 className="text-text-primary mb-3 mt-0 text-center">
                Biometric Verification
              </h1>
              <p className="text-gray-700 mb-6 mt-0 text-center">
                Step: 2 of 2
              </p>
              <div className="">
                <div className="min-w-[30rem]">
                  <div className="flex justify-center">
                    <img
                      className="w-[300px] h-[270px] object-contain object-top "
                      src="data:image/png;base64,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"
                    />
                  </div>
                </div>
              </div>
              <div className="justify-center mt-8 w-full">
                {!captured ? (
                  <Biometric
                    onCapture={(img) => {
                      setLoader(true);
                      setCaptured(img);
                      setTimeout(() => {
                        setLoader(false);
                      }, 500);
                    }}
                  />
                ) : (
                  <div className="flex flex-col justify-center items-center">
                    {loader ? (
                      <div
                        role="status"
                        className="h-[270px] flex justify-center items-center"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-12 h-12 text-gray-100 animate-spin dark:text-gray-600 fill-text-primary"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      <img
                        src={captured}
                        className="h-[270px] w-[300px] object-cover"
                      />
                    )}
                    <button
                      className="cursor-pointer mt-8 py-3 lg:py-4 px-12 w-full lg:px-16 text-white-500 font-semibold rounded-lg border-0 bg-text-primary hover:shadow-green-md text-md transition-all outline-none "
                      onClick={() => {
                        setStep(3);
                        setTimeout(() => {
                          window.location.href = "/FaceVerification";
                        }, 2000);
                      }}
                    >
                      Verify
                    </button>
                  </div>
                )}
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
            <QRCode value={qrCodeValue ? qrCodeValue : ""} size={256} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

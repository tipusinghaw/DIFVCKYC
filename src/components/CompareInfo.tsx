"use client";

const CompareInfo = () => {

    const handleStartFaceVerification = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); 
        window.location.href = '/faceverification'; 
      };
    
    return (
        <div
            className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-b from-blue-50 to-blue-100"
        >
            <div className="flex flex-col items-center">
                <img
                    className="w-[230px] mb-6"
                    src="/bank_logo.jpg"
                    alt="Bank Logo"
                />
                <h1 className="text-4xl font-semibold text-[#1E3A8A] mb-4">
                    Start Your KYC Process
                </h1>
                <p className="text-lg text-gray-600 mb-8 text-center">
                    We value your privacy and are committed to protecting your personal information. 
                    Please click the button below to begin the KYC process.
                </p>
            </div>

            <div className="flex items-center justify-center mt-10">
                <button
                    onClick={handleStartFaceVerification}
                    className="transition duration-300 transform hover:scale-105 w-64 rounded-md bg-[#60a5fa] py-3 px-6 text-center text-lg font-semibold text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                    Start KYC
                </button>
            </div>
        </div>
    );
};

export default CompareInfo;

const FaceVerification = () => {
    const handleNextPage = async() => {
        
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4">
            <h2 className="text-3xl font-semibold text-[#1E3A8A] mb-4">
                Face Verification
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
                Please follow the instructions on the screen to complete your face verification.
            </p>

            <div className="flex flex-col items-center mb-6">
                {/* Placeholder for camera feed or upload area */}
                <div className="w-full max-w-md border-4 border-dashed border-gray-300 rounded-lg h-48 flex items-center justify-center mb-4">
                    <span className="text-gray-500">Camera feed or Upload Area</span>
                </div>

                {/* Instructions or a button to start the verification */}
                <p className="text-center text-md text-gray-500 mb-2">
                    Align your face in the center of the box above.
                </p>
                <button
                    onClick={handleNextPage}
                    className="mt-6 transition duration-300 transform hover:scale-105 w-64 rounded-md bg-[#60a5fa] py-3 px-6 text-center text-lg font-semibold text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default FaceVerification;


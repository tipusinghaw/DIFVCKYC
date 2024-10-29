const CardDetails = () => {
    const handleStartBiometricVerification = async () => {
      window.location.href = "/biometricverification";
    };
    const aadhaarDetails = {
      name: "John Doe",
      uid: "1234 5678 9012",
      address: "123, Main Street, City, State, Country, 123456",
      dob: "01 January 1990",
      gender: "Male",
      issueDate: "01 January 2021",
      photoUrl:
        "https://sharedp.com/wp-content/uploads/2024/06/cartoon-profile-pic-girl-960x1024.jpg",
    };
  
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-6 w-[600px] h-[350px] flex bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 mb-6">
          <div className="w-38 border-2 border-gray-300 rounded-lg overflow-hidden mr-4">
            <img
              src={aadhaarDetails.photoUrl}
              alt="Aadhaar Holder"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 ml-2 flex flex-col justify-between">
            <div>
              <div className="flex mt-2">
                <h2 className="font-bold text-gray-800 text-lg">Name:</h2>
                <p className="font-semibold text-gray-600 ml-2 text-lg">{aadhaarDetails.name}</p>
              </div>
              <div className="flex mt-2">
                <h2 className="font-bold text-gray-800 text-lg">Date of Birth:</h2>
                <p className="font-semibold text-gray-600 ml-2 text-lg">{aadhaarDetails.dob}</p>
              </div>
              <div className="flex mt-2">
                <h2 className="font-bold text-gray-800 text-lg">Gender:</h2>
                <p className="font-semibold text-gray-600 ml-2 text-lg">{aadhaarDetails.gender}</p>
              </div>
              <div className="flex mt-2">
                <h2 className="font-bold text-gray-800 text-lg">Address:</h2>
                <p className="font-semibold text-gray-600 ml-2 text-lg">{aadhaarDetails.address}</p>
              </div>
              <div className="flex mt-2">
                <h2 className="font-bold text-gray-800 text-lg">Aadhar Id:</h2>
                <p className="font-semibold text-gray-600 ml-2 text-lg">{aadhaarDetails.uid}</p>
              </div>
            </div>
          </div>
        </div>
  
        <button
          className="cursor-pointer py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-indigo-500 hover:bg-indigo-600 transition duration-300"
          onClick={handleStartBiometricVerification}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default CardDetails;
  
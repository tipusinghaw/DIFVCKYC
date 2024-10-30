import { motion } from "framer-motion";

function VerificationSuccess() {
  const goToLandingPage = () => {
    window.location.href = "/";
  };

  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-10 rounded-xl shadow-2xl text-center max-w-[800px] min-h-[600px] mx-auto">
        <h2 className="mt-20 text-3xl font-bold mb-6 text-blue-600">
          Loan Approved Successfully!
        </h2>
        <p className="text-gray-700 mb-6">
          Congratulations! Your loan application has been approved. The funds will be deposited into your account shortly. Please check your account for confirmation.
        </p>

        <div className="flex justify-center mb-6">
          <img
            src="https://img.lovepik.com/element/45016/2345.png_860.png"
            alt="Success"
            className="w-24 h-24"
          />
        </div>

        <p className="text-blue-500 font-semibold text-lg mb-4">
          You can explore your financial dashboard for more details on your loan and other available services.
        </p>

        <div className="flex justify-center items-center">
          <button
            onClick={goToLandingPage}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default VerificationSuccess;

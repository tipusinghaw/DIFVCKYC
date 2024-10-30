import { motion } from "framer-motion";

function VerificationSuccess() {
  const goToLandingPage = () => {
    window.location.href = "/";
  };

  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-10 rounded-xl shadow-2xl text-center max-w-[800px] min-h-[600px] mx-auto">
        <h2 className="mt-20 text-3xl font-bold mb-6 text-blue-600">
          Verification Successful!
        </h2>
        <p className="text-gray-700 mb-6">
          Congratulations! Your credentials have been verified successfully. You
          can now access all the features available to verified users.
        </p>

        <div className="flex justify-center mb-6">
          <img
            src="https://img.lovepik.com/element/45016/2345.png_860.png"
            alt="Success"
            className="w-24 h-24"
          />
        </div>

        <p className="text-blue-500 font-semibold text-lg mb-4">
          Explore your dashboard or go back to the homepage for more options.
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

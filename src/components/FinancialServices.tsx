"use client";

import { FaCreditCard, FaMoneyCheck, FaUniversity } from "react-icons/fa";

const FinancialServices = () => {
  const handleLoanApplication = () => {
    window.location.href = "/apply-loan";
  };

  const handleCreditCardApplication = () => {
    window.location.href = "/apply-credit-card";
  };

  const handleDebitCardApplication = () => {
    window.location.href = "/apply-debit-card";
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
          <span style={{alignContent:"center"}}className="ml-2 ustify-center item-center text-lg font-normal">0 $</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Apply for Loan */}
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

          {/* Apply for Credit Card */}
          <div
            className="bg-[#bfdbfe] shadow-lg rounded-xl border border-gray-200 p-12 flex items-center space-x-6 mb-8 cursor-pointer hover:bg-blue-100 transition duration-300 ease-in-out"
            onClick={handleCreditCardApplication}
          >
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

          {/* Apply for Debit Card */}
          <div
            className="bg-[#bfdbfe] shadow-lg rounded-xl border border-gray-200 p-12 flex items-center space-x-6 mb-8 cursor-pointer hover:bg-blue-100 transition duration-300 ease-in-out"
            onClick={handleDebitCardApplication}
          >
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

          <div
            className="bg-[#bfdbfe] shadow-lg rounded-xl border border-gray-200 p-12 flex items-center space-x-6 mb-8 cursor-pointer hover:bg-blue-100 transition duration-300 ease-in-out"
            onClick={handleDebitCardApplication}
          >
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

          <div
            className="bg-[#bfdbfe] shadow-lg rounded-xl border border-gray-200 p-12 flex items-center space-x-6 mb-8 cursor-pointer hover:bg-blue-100 transition duration-300 ease-in-out"
            onClick={handleDebitCardApplication}
          >
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

          <div
            className="bg-[#bfdbfe] shadow-lg rounded-xl border border-gray-200 p-12 flex items-center space-x-6 mb-8 cursor-pointer hover:bg-blue-100 transition duration-300 ease-in-out"
            onClick={handleDebitCardApplication}
          >
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

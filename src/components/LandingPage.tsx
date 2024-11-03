import React from "react";
import {
  ChevronRight,
  Shield,
  Clock,
  CreditCard,
  FileCheck,
} from "lucide-react";

export default function BankHomePage() {
  const handleKYCVerification = () => {
    window.location.href = "/bankportal";
  };

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Secure Banking",
      description:
        "Bank with confidence using our state-of-the-art security systems",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "24/7 Service",
      description: "Access your accounts and support anytime, anywhere",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
      title: "Digital Cards",
      description: "Manage your cards digitally with instant controls",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-blue-600" />,
      title: "Quick KYC",
      description:
        "Complete your Aadhaar-based KYC verification in just 2 steps",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">TrustBank</div>
            <div className="space-x-8">
              <button className="text-gray-600 hover:text-blue-600">
                Personal
              </button>
              <button className="text-gray-600 hover:text-blue-600">
                Business
              </button>
              <button className="text-gray-600 hover:text-blue-600">
                About
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Login
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4"
        style={{
          height: "400px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* Main Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 bg-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Banking Made <span className="text-blue-600">Simple</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the next generation of banking with TrustBank. Secure,
            seamless, and always by your side.
          </p>
          <div className="space-x-4">
            <button
              onClick={handleKYCVerification}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Start KYC Verification
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 bg-[url('https://images.unsplash.com/photo-1559526324-c4a54a3bb6ef')] bg-cover bg-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* KYC Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 bg-[url('https://images.unsplash.com/photo-1581093588401-12fc5b2e05c3')] bg-cover bg-center">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Complete Your KYC Verification
            </h2>
            <p className="text-blue-100 mb-8">
              Verify your identity quickly and securely with our Aadhaar-based
              KYC process
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg trhttps://images.unsplash.com/photo-1519744792095-2f2205e87b6fansform transition-transform hover:scale-105 duration-300">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
                Complete Your KYC in Just 2 Steps!
              </h3>
              <p className="text-gray-600 mb-6">
                Begin your Aadhaar verification process and ensure your digital
                identity with our seamless KYC service.
              </p>
              <button
                onClick={handleKYCVerification}
                className="w-full md:w-96 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition duration-300"
              >
                Start Verification
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Banking with Us?
            </h2>
            <p className="text-blue-100 mb-8">
              Join millions of satisfied customers who trust us with their
              banking needs
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center mx-auto">
              Get Started Today
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">TrustBank</div>
            <p className="mb-4">
              2024 TrustBank - Secure and Fast account opening
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
}

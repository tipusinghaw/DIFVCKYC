import BankPortal from "./BankPortal";

export default function LandingPage() {

    const handleNextPage = () => {
        window.location.href = '/bankportal'
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 flex flex-col justify-center items-center">
            <header className="w-full p-6 text-center text-white">
                <h1 className="text-4xl font-bold animate-pulse">
                    Welcome to KYC Verification Portal
                </h1>
                <p className="text-lg mt-4">Secure and Fast Aadhaar-Based KYC Verification</p>
            </header>

            <main className="w-full flex flex-col items-center mt-8">
                <section className="bg-white p-8 rounded-xl shadow-lg w-[90%] md:w-[60%] lg:w-[40%] transform transition-transform hover:scale-105 duration-300">
                    <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-4">
                        Complete Your KYC in Just 2 Steps!
                    </h2>
                    <p className="text-center text-gray-600 mb-6">
                        Begin your Aadhaar verification process and ensure your digital identity with our seamless KYC service.
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={() => handleNextPage()}
                            className="w-[400px] py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition duration-300"
                        >
                            Create your account
                        </button>
                    </div>
                </section>

            </main>

            <footer className="w-full p-6 text-center text-white mt-16">
                <p>&copy; 2024 KYC Portal - Secure and Fast Aadhaar Verification</p>
            </footer>
        </div>
    );
}

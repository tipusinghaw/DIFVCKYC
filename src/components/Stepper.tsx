import { useEffect, useState } from "react";

export default function Stepper() {
  const steps = [
    {
      title: "Verifying Your VC",
      description:
        "We are currently verifying your verification credential (VC) to ensure that your personal information is accurate and secure.",
    },
    {
      title: "Document Verification",
      description:
        "Your uploaded documents are being reviewed for completeness and authenticity to meet the necessary requirements for processing.",
    },
    {
      title: "Loan Approval Process",
      description:
        "The bank is reviewing your application and documents to determine your loan eligibility. This step involves careful consideration of your financial profile.",
    },
    {
      title: "Funds Transferred to Your Account",
      description:
        "Congratulations! Your loan has been approved, and the funds will be deposited into your account shortly. You will receive a confirmation notification.",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveStep((prevStep) => {
        if (prevStep + 1 === steps.length) {
          // Redirect after the last step
          window.location.href = "/verification";
          return prevStep;
        }
        return prevStep + 1;
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeStep]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300">
      <div className="flex flex-col p-10 lg:p-16 my-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Loan Application Process
        </h2>
        <ol className="overflow-hidden space-y-8">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`relative flex-1 after:content-[''] after:w-0.5 after:h-full ${
                activeStep === index
                  ? "after:bg-indigo-800" // Darker shade for active step
                  : "after:bg-gray-200"
              } after:inline-block after:absolute after:-bottom-12 after:left-1/2`}
            >
              <div className="flex items-center justify-center gap-8 w-full max-w-sm">
                <div
                  className={`flex items-center gap-3.5 ${
                    activeStep === index
                      ? "bg-indigo-100 animate-pulse"
                      : "bg-gray-50"
                  } p-3.5 rounded-xl relative z-10 border ${
                    activeStep === index
                      ? "border-indigo-800"
                      : "border-gray-50"
                  } w-full`}
                >
                  <div
                    className={`rounded-lg ${
                      activeStep === index ? "bg-indigo-800" : "bg-gray-200" 
                    } flex items-center justify-center`}
                  >
                    <span
                      className={`text-${
                        activeStep === index ? "white" : "gray-600"
                      } p-3`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15.9998 7C15.9998 9.20914 14.2089 11 11.9998 11C9.79067 11 7.99981 9.20914 7.99981 7C7.99981 4.79086 9.79067 3 11.9998 3C14.2089 3 15.9998 4.79086 15.9998 7Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <path
                          d="M11.9998 14C9.15153 14 6.65091 15.3024 5.23341 17.2638C4.48341 18.3016 4.10841 18.8204 4.6654 19.9102C5.2224 21 6.1482 21 7.99981 21H15.9998C17.8514 21 18.7772 21 19.3342 19.9102C19.8912 18.8204 19.5162 18.3016 18.7662 17.2638C17.3487 15.3024 14.8481 14 11.9998 14Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="text-gray-700">
                    <h4 className="text-lg font-semibold">{step.title}</h4>
                    <p className="text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="flex justify-center mt-4">
          {/* Three-Dot Animation */}
          <div className="flex space-x-2">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce"
                style={{ animationDelay: `${idx * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

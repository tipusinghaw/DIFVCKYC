function KycForm() {
  const handleStartKyc = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    window.location.href = '/compareinfo'; 
  };
  return (
    <div className="flex items-center justify-center p-12 bg-gray-100">
      <div className="w-full max-w-[800px]">
        <div className="rounded-md bg-[#60a5fa] py-10 px-8 text-start text-4xl font-semibold text-white">
          <p>KYC Form</p>
        </div>
        <div className="w-full max-w-[800px] bg-[#dbeafe] p-8">
        <form onSubmit={handleStartKyc}>
            <div className="mb-6">
              <label
                htmlFor="first-name"
                className="mb-3 block text-base font-medium text-[#07074D] mt-6"
              >
                1. Name of applicant
              </label>
              <div className="flex -mx-3">
                <div className="w-full px-3 sm:w-1/2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="First Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Last Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="first-name"
                className="mb-3 block text-base font-medium text-[#07074D] mt-6"
              >
                2. Father's/Spouse's Name
              </label>
              <div className="flex -mx-3">
                <div className="w-full px-3 sm:w-1/2">
                  <input
                    type="text"
                    name="fathers-name"
                    id="fathers-name"
                    placeholder="First Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Last Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6 flex -mx-3">
              <div className="w-full px-3 sm:w-1/2">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  3. Select Gender
                </label>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      className="mr-2"
                    />
                    <label htmlFor="male" className="text-[#6B7280]">
                      Male
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      className="mr-2"
                    />
                    <label htmlFor="female" className="text-[#6B7280]">
                      Female
                    </label>
                  </div>
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  4. Select Marital Status
                </label>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="marital-status"
                      id="single"
                      value="single"
                      className="mr-2"
                    />
                    <label htmlFor="single" className="text-[#6B7280]">
                      Single
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="marital-status"
                      id="married"
                      value="married"
                      className="mr-2"
                    />
                    <label htmlFor="married" className="text-[#6B7280]">
                      Married
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-6">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    5. Date of Birth
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                6. Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="aadhar"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                7. Enter your aadhar details
              </label>
              <input
                type="aadhar"
                name="aadhar"
                id="aadhar"
                placeholder="Enter your aadhar card number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="pan"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                8. Enter your pan card details
              </label>
              <input
                type="pan"
                name="pan"
                id="pan"
                placeholder="Enter your pan card number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-6">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                9. Address Details
              </label>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-6">
                    <input
                      type="text"
                      name="area"
                      id="area"
                      placeholder="Enter area"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-6">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Enter city"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-6">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="Enter state"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-6">
                    <input
                      type="text"
                      name="post-code"
                      id="post-code"
                      placeholder="Post Code"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button 
             type="submit"
              className="transition duration-300 transform hover:scale-105 hover:shadow-form w-full rounded-md bg-[#60a5fa] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default KycForm;

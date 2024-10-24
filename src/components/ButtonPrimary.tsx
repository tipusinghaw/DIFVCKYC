import React from "react";

const ButtonPrimary = ({ children, addClass, onClick }: any) => {
  return (
    <button
      className={
        "cursor-pointer py-3 lg:py-4 px-12 w-full lg:px-16 text-white-500 font-semibold rounded-lg border-0 bg-text-primary hover:shadow-green-md text-md transition-all outline-none " +
        addClass
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;

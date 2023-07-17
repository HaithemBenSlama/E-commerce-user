import React from "react";
import Stepper from "./Stepper";

const CreditCard = () => {
  return (
    <div className="md:px-16 w-full px-10 mt-10 md:w-1/2 bg-slate-100 py-10 rounded-xl shadow-xl">
      <h1 class="mb-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
        Set up your profile
      </h1>
      <Stepper activeStep={3} />
      <div className="mt-5 p-5"></div>
    </div>
  );
};

export default CreditCard;

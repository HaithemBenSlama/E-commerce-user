import React, { useState } from "react";
import Stepper from "./Stepper";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const CreditCard = ({ setActiveStep, activeStep }) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const handleNumberChange = (e) => {
    const formattedNumber = e.target.value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ");
    setNumber(formattedNumber || "");
  };

  const handleMonthChange = (e) => {
    const month = e.target.value;
    setExpiryMonth(month);
    setExpiry(`${month}/${expiryYear}`);
  };

  const handleYearChange = (e) => {
    const year = e.target.value;
    setExpiryYear(year);
    setExpiry(`${expiryMonth}/${year}`);
  };

  return (
    <div className="md:px-16 w-full px-10 mt-10 md:w-1/2 bg-slate-100 py-10 rounded-xl shadow-xl">
      <h1 className="mb-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
        Set up your profile
      </h1>
      <Stepper activeStep={activeStep} />
      <div className="mt-5 md:px-5">
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
        <div className="bg-slate-200 w-full -mt-20 rounded-xl shadow-lg">
          <form className="pt-28 px-10">
            <div className="mb-3">
              <label
                htmlFor="credit_number"
                className="ml-3 block mb-2 text-sm font-medium text-gray-900"
              >
                Card Number
              </label>
              <input
                type="tel"
                name="credit_number"
                placeholder="1234 5678 9101 1121"
                value={number}
                maxLength={19}
                className="p-2 w-full rounded-xl border text-sm h-12"
                onChange={handleNumberChange}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="credit_holder"
                className="ml-3 block mb-2 text-sm font-medium text-gray-900"
              >
                Holder
              </label>
              <input
                type="text"
                name="credit_holder"
                placeholder="Haithem Ben Slama"
                value={name}
                className="p-2 w-full rounded-xl border text-sm h-12"
                onChange={(e) => setName(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-3">
              <div>
                <label
                  htmlFor="expiry"
                  className="ml-3 block mb-2 text-sm font-medium text-gray-900"
                >
                  Expiry Date
                </label>
                <div className="flex items-center">
                  <input
                    type="tel"
                    name="expiry"
                    placeholder="Month"
                    value={expiryMonth}
                    maxLength={2}
                    className="p-2 rounded-xl border text-sm h-12 w-20"
                    onChange={handleMonthChange}
                    onFocus={(e) => setFocus(e.target.name)}
                  />
                  <span className="mx-3 text-lg text-gray-500">/</span>
                  <input
                    type="tel"
                    name="expiry"
                    placeholder="Year"
                    value={expiryYear}
                    maxLength={2}
                    className="p-2 rounded-xl border text-sm h-12 w-20"
                    onChange={handleYearChange}
                    onFocus={(e) => setFocus(e.target.name)}
                  />
                </div>
              </div>
              <div className="pb-8">
                <label
                  htmlFor="cvc"
                  className="ml-3 block mb-2 text-sm font-medium text-gray-900"
                >
                  CVC
                </label>
                <input
                  type="tel"
                  name="cvc"
                  placeholder="***"
                  value={cvc}
                  maxLength={4}
                  className="p-2 w-full rounded-xl border text-sm h-12"
                  onChange={(e) => setCvc(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-end">
          <div className="px-5 pt-1">
            <a
              onClick={() => setActiveStep(activeStep + 1)}
              className="text-blue-500 mr-10 hover:cursor-pointer hover:text-blue-700 font-medium underline "
            >
              Not now
            </a>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setActiveStep(activeStep + 1)}
            >
              Next
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;

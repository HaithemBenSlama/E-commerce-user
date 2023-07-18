import React from "react";
import { GrFormPreviousLink } from "react-icons/gr";

const VerifyEmail = () => {
  return (
    <div className="md:px-16 w-full px-10 mt-10 md:w-1/3 bg-slate-100 py-10 rounded-xl shadow-xl">
      <h3 className="text-2xl">Thanks for signing up for E-commerce!</h3>
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-24 h-24 text-green-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
          />
        </svg>
      </div>

      <p>We're happy you're here. Let's get your email address verified</p>
      <div className="mt-4 flex gap-6">
        <a
          href="/Store"
          className="px-3 py-3 text-gray-900 bg-gray-200 rounded-lg flex justify-center items-center font-medium hover:bg-gray-300"
        >
          <GrFormPreviousLink className="mr-3 w-5 h-5" />
          Back to shop
        </a>
        <a
          href="/Setup"
          className="px-3 py-3 text-gray-900 bg-gray-200 rounded-lg flex justify-center items-center font-medium hover:bg-gray-300"
        >
          Set up your profile
        </a>
      </div>
    </div>
  );
};

export default VerifyEmail;

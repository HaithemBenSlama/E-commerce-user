import React, { useState } from "react";
import { FaShippingFast } from "react-icons/fa";

const ShippingInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded={isOpen}
          aria-controls="accordion-collapse-body-1"
          onClick={toggleAccordion}
        >
          <span className="flex items-center">
            <FaShippingFast className="mr-4 w-6 h-6" /> Shipping & Returns
          </span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0 ${
              isOpen ? "rotate-0" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={`${isOpen ? "" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-5 border border-gray-200 ">
          <p className="mb-2 text-gray-500 ">
            We offer free shipping on all orders within the United States.
            Please allow 2-3 business days for processing and an additional 5-7
            business days for delivery.
          </p>
          <p className="text-gray-500 ">
            If you're not satisfied with your purchase, we accept returns within
            30 days of delivery. Please contact our customer support team at
            <a className="underline text-gray-700 font-medium">
              support@e-commerce.com
            </a>{" "}
            for return instructions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;

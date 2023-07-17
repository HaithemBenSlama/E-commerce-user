import CustomInput from "@/components/CustomInput";
import React from "react";
import Stepper from "./Stepper";

const Address = () => {
  return (
    <div className="md:px-16 w-full px-10 mt-10 md:w-1/2 bg-slate-100 py-10 rounded-xl shadow-xl">
      <h1 class="mb-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
        Set up your profile
      </h1>
      <Stepper activeStep={2} />
      <div className="mt-5 p-5">
        <div className="grid gap-6 md:grid-cols-2 mb-5">
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"setup_country"}
            label={"Country"}
            name={"setup_country"}
            placeholder={"e.g. Tunisia"}
            required={true}
            type={"text"}
          />
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"setup_city"}
            label={"City"}
            name={"setup_city"}
            placeholder={"e.g. Kairouan"}
            required={true}
            type={"text"}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 mb-5">
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"setup_Address1"}
            label={"Address 1"}
            name={"setup_Address1"}
            placeholder={"Address 1"}
            required={false}
            type={"text"}
          />
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"setup_Address2"}
            label={"Address 2"}
            name={"setup_Address2"}
            placeholder={"Address 2"}
            required={true}
            type={"text"}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 mb-5">
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"setup_streetAddress"}
            label={"Street Address"}
            name={"setup_streetAddress"}
            placeholder={"Street Address"}
            required={false}
            type={"text"}
          />
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"setup_zipCode"}
            label={"Zip/Postal Code"}
            name={"setup_zipCode"}
            placeholder={"3100"}
            required={true}
            type={"text"}
          />
        </div>
        <div className="flex justify-end">
          <div className="px-5 pt-1">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

export default Address;

"use client";
import React, { useState } from "react";
import Stepper from "./Stepper";
import CustomInput from "@/components/CustomInput";
import { BiUser } from "react-icons/bi";
import CustomSelect from "@/components/CustomSelect";

const UserInfo = ({ activeStep, setActiveStep }) => {
  const [uploadedPhoto, setUploadedPhoto] = useState(null);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedPhoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="md:px-16 w-full px-10 mt-10 md:w-1/2 bg-slate-100 py-10 rounded-xl shadow-xl">
      <h1 className="mb-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
        Set up your profile
      </h1>
      <Stepper activeStep={activeStep} />
      <div className="mt-5 p-5">
        <div className="grid gap-6 md:grid-cols-2 mb-5">
          <div>
            <label
              htmlFor="newAdmin_uploadPhoto"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Photo
            </label>
            <div className="flex items-center">
              <label
                htmlFor="newAdmin_uploadPhoto"
                className="relative cursor-pointer rounded-full bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-14 h-14 flex items-center justify-center"
              >
                {uploadedPhoto ? (
                  <img
                    src={uploadedPhoto}
                    alt="Uploaded Photo"
                    className="rounded-full"
                  />
                ) : (
                  <BiUser className="w-8 h-8 text-white" />
                )}
                <input
                  type="file"
                  id="newAdmin_uploadPhoto"
                  className="sr-only"
                  onChange={handlePhotoUpload}
                  required
                />
              </label>
              <span className="font-medium text-sm p-[14px] ml-2">
                {uploadedPhoto ? "Photo Uploaded" : "Upload your photo"}
              </span>
            </div>
          </div>
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"setup_firstName"}
            label={"First Name"}
            name={"setup_firstName"}
            placeholder={"First Name"}
            required={true}
            type={"text"}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 mb-5">
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"setup_lastName"}
            label={"Last Name"}
            name={"setup_lastName"}
            placeholder={"Last Name"}
            required={true}
            type={"text"}
          />
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"setup_birthday"}
            label={"Birth Date"}
            name={"setup_birthday"}
            placeholder={""}
            required={true}
            type={"date"}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 mb-5">
          <CustomSelect
            defaultValue={"Homme"}
            error={false}
            errorMessage={""}
            id={"setup_gender"}
            label={"Gender"}
            options={[
              { text: "Femme", value: "F" },
              { text: "Other", value: "Other" },
            ]}
          />
          <CustomInput
            disabled={false}
            error={false}
            errorMessage={""}
            id={"setup_phoneNumber"}
            label={"Phone Number"}
            name={"setup_phoneNumber"}
            placeholder={"eg. +216 27 660 834"}
            required={true}
            type={"number"}
          />
        </div>
        <div className="flex justify-end">
          <div className="px-5 pt-1">
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

export default UserInfo;

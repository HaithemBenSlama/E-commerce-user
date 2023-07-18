import React from "react";
import Stepper from "./Stepper";

const Finish = () => {
  return (
    <div className="md:px-16 w-full px-10 mt-10 md:w-1/2 bg-slate-100 py-10 rounded-xl shadow-xl">
      <h1 className="mb-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
        Set up your profile
      </h1>
      <Stepper activeStep={4} />
      <div className="mt-5 p-5">
        <h3 className="text-2xl">Your profile is set up!</h3>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150px"
            height="150px"
            viewBox="0 0 100 100"
          >
            <path fill="#ee3e54" d="M13 27a2 2 0 100 4 2 2 0 100-4z"></path>
            <path fill="#f1bc19" d="M77 12a1 1 0 100 2 1 1 0 100-2z"></path>
            <path
              fill="#fce0a2"
              d="M50 13a37 37 0 100 74 37 37 0 100-74z"
            ></path>
            <path fill="#f1bc19" d="M83 11a4 4 0 100 8 4 4 0 100-8z"></path>
            <path fill="#ee3e54" d="M87 22a2 2 0 100 4 2 2 0 100-4z"></path>
            <path
              fill="#fbcd59"
              d="M81 74a2 2 0 100 4 2 2 0 100-4zM15 59a4 4 0 100 8 4 4 0 100-8z"
            ></path>
            <path fill="#ee3e54" d="M25 85a2 2 0 100 4 2 2 0 100-4z"></path>
            <path
              fill="#fff"
              d="M18.5 51a2.5 2.5 0 100 5 2.5 2.5 0 100-5z"
            ></path>
            <path fill="#f1bc19" d="M21 66a1 1 0 100 2 1 1 0 100-2z"></path>
            <path fill="#fff" d="M80 33a1 1 0 100 2 1 1 0 100-2z"></path>
            <path
              fill="#a1d3a2"
              d="M72.4 44v20.4c0 4.3-3.5 7.8-7.8 7.8H35.5c-4.3 0-7.8-3.5-7.8-7.8V35.6c0-4.3 3.5-7.8 7.8-7.8h29.1c3.6 0 6.6 2.4 7.6 5.8"
            ></path>
            <path
              fill="#472b29"
              d="M64.5 73h-29c-4.7 0-8.5-3.8-8.5-8.5V35.6c0-4.7 3.8-8.5 8.5-8.5h29.1c3.8 0 7.2 2.6 8.2 6.3.1.4-.1.8-.5.9-.4.1-.8-.1-.9-.5-.9-3.1-3.7-5.2-6.9-5.2h-29c-3.9 0-7.1 3.2-7.1 7.1v28.8c0 3.9 3.2 7.1 7.1 7.1h29.1c3.9 0 7.1-3.2 7.1-7.1V44c0-.4.3-.7.7-.7s.7.3.7.7v20.4c0 4.7-3.9 8.6-8.6 8.6z"
            ></path>
            <path
              fill="#472b29"
              d="M68.5 59.4c-.3 0-.5-.2-.5-.5V55c0-.3.2-.5.5-.5s.5.2.5.5v3.9c0 .3-.2.5-.5.5zm0-6.9c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5s.5.2.5.5v2c0 .3-.2.5-.5.5z"
            ></path>
            <path
              fill="#472b29"
              d="M64 69H36c-2.8 0-5-2.2-5-5V36c0-2.8 2.2-5 5-5h25.4c.3 0 .5.2.5.5s-.2.5-.5.5H36c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4v-2.4c0-.3.2-.5.5-.5s.5.2.5.5V64c0 2.8-2.2 5-5 5z"
            ></path>
            <path
              fill="#00ac9c"
              d="M49.5 62.5H49.2c-.4 0-.8-.1-1-.4l-8.3-8.2c-.3-.3-.4-.6-.4-1s.2-.8.4-1c.3-.3.6-.4 1-.4s.8.2 1 .4l7.1 7.4L73 36c.3-.3.6-.4 1-.4s.8.2 1 .4c.3.3.4.6.4 1s-.2.8-.4 1L50.6 62.1c-.1.1-.2.2-.4.3 0 0-.1 0-.1.1-.1 0-.2.1-.3.1-.1-.1-.1-.1-.3-.1z"
            ></path>
            <path
              fill="#472b29"
              d="M74.2 36c.3 0 .5.1.7.3.4.4.4 1 0 1.4l-24.6 24c-.1.1-.2.1-.3.2H49.7h-.4c-.2 0-.5-.1-.7-.3l-8.3-8.2c-.4-.4-.4-1 0-1.4.2-.2.4-.3.7-.3s.5.1.7.3l7.5 7.8 24.4-23.6c.1-.1.3-.2.6-.2m0-1c-.5 0-1 .2-1.4.6L49.2 58.5l-6.8-7.1c-.4-.4-.9-.6-1.4-.6s-1 .2-1.4.6c-.4.4-.6.9-.6 1.4 0 .5.2 1 .6 1.4l8.3 8.2c.4.4.8.6 1.4.6H49.9c.1 0 .2 0 .3-.1.1 0 .2-.1.2-.1.2-.1.4-.2.5-.4l24.6-24c.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4-.3-.4-.8-.6-1.3-.6z"
            ></path>
          </svg>
        </div>

        <p className="font-medium leading-7">
          Welcome to our e-commerce website. You will find a wide range of
          products and enjoy a seamless shopping experience. If you have any
          questions or need assistance, feel free to reach out to our support
          team. Happy shopping!
        </p>
      </div>
      <div className="flex justify-end">
        <div className="px-5 pt-1">
          <a
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center hover:cursor-pointer"
            href="/Store"
          >
            Go to Shop
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default Finish;

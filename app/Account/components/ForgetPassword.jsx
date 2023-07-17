import CustomInput from "@/components/CustomInput";
import React from "react";

const ForgetPassword = () => {
  return (
    <div className="md:px-16 w-full px-10 mt-10 md:w-1/3 bg-slate-100 py-10 rounded-xl shadow-xl">
      <h1 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
        Forgot your password?
      </h1>
      <p class="font-light text-gray-500">
        Don't fret! Just type in your email and we will send you a code to reset
        your password!
      </p>

      <form className="flex flex-col gap-4 mt-5">
        <CustomInput
          disabled={false}
          error={false}
          errorMessage={""}
          id={"login_email"}
          label={"Email"}
          name={"login_email"}
          placeholder={"exemple@comapny.com"}
          required={true}
          type={"email"}
        />
        <div className="flex items-start my-3">
          <div className="flex items-center h-5">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              for="terms"
              className="font-light text-gray-500 dark:text-gray-300"
            >
              I accept the{" "}
              <a
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                href="#"
              >
                Terms and Conditions{" "}
              </a>
            </label>
          </div>
        </div>
        <button className="bg-slate-500 rounded-xl text-white py-2 hover:scale-105 hover:duration-300">
          Reset password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;

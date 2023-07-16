import React from "react";
import ButtonGoogle from "@/components/ButtonGoogle";
import ButtonApple from "@/components/ButtonApple";
import { ButtonFacebook } from "@/components/ButtonFacebook";
import CustomInput from "@/components/CustomInput";

const SignUp = ({ handleComponentChange }) => {
  const handleClickLogin = () => {
    handleComponentChange("login");
  };
  return (
    <div className="md:px-16 w-full px-10 mt-10 md:w-1/3 bg-slate-100 py-10 rounded-xl shadow-xl">
      <h2 className="font-bold text-2xl">Sign Up</h2>
      <p className="text-sm mt-3">Create your free account in one click !</p>
      <div className="flex space-x-4">
        <ButtonGoogle />
        <ButtonApple />
        <ButtonFacebook />
      </div>
      <div className="mt-5 grid grid-cols-3 items-center text-gray-400 pb-3">
        <hr className="border-gray-400" />
        <p className="text-center text-sm">OR</p>
        <hr className="border-gray-400" />
      </div>
      <form className="flex flex-col gap-4">
        <CustomInput
          disabled={false}
          error={false}
          errorMessage={""}
          id={"signUp_fullName"}
          label={"What should we call you ?"}
          name={"signUp_fullName"}
          placeholder={"Full Name"}
          required={true}
          type={"text"}
        />
        <CustomInput
          disabled={false}
          error={false}
          errorMessage={""}
          id={"signUp_email"}
          label={"Your Email: "}
          name={"signUp_email"}
          placeholder={"name@comapny.com"}
          required={true}
          type={"email"}
        />
        <CustomInput
          disabled={false}
          error={false}
          errorMessage={""}
          id={"signUp_password"}
          label={"Your password: "}
          name={"signUp_password"}
          placeholder={"••••••••"}
          required={true}
          type={"password"}
        />
        <CustomInput
          disabled={false}
          error={false}
          errorMessage={""}
          id={"signUp_confirmPassword"}
          label={"Confirm your password: "}
          name={"signUp_confirmPassword"}
          placeholder={"••••••••"}
          required={true}
          type={"password"}
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
              By signing up, you are creating an E-commerce account, and you
              agree to E-commerce's{" "}
              <a
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                href="#"
              >
                Terms and Use{" "}
              </a>
              and{" "}
              <a
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                href="#"
              >
                Privacy Policy.
              </a>
            </label>
          </div>
        </div>
        <button className="bg-slate-500 rounded-xl text-white py-2 hover:scale-105 hover:duration-300">
          Register
        </button>
      </form>
      <div className="text-xs flex justify-between items-center mt-7">
        <p>Already have an account ? </p>
        <button
          onClick={handleClickLogin}
          className="py-2 px-5 bg-white border rounded-xl hover:scale-105 hover:duration-300 hover:bg-slate-200"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignUp;

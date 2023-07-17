import React, { useState } from "react";
import CustomInput from "@/components/CustomInput";
import ButtonGoogle from "@/components/ButtonGoogle";
import ButtonApple from "@/components/ButtonApple";
import { ButtonFacebook } from "@/components/ButtonFacebook";
import { dataHome } from "../variable/data";
import { useRouter } from "next/navigation";

const Login = ({ handleComponentChange }) => {
  const router = useRouter();
  const user_data = dataHome;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleClickRegister = () => {
    handleComponentChange("signup");
  };

  const handleClickForgetPassword = () => {
    handleComponentChange("forgetPassword");
  };

  const handleClickLogin = (event) => {
    event.preventDefault();

    if (!email) {
      setEmailError(true);
      setEmailErrorMessage("Email is a required field.");
    } else if (!isValidEmail(email)) {
      setEmailError(true);
      setEmailErrorMessage("Invalid email format.");
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password) {
      setPasswordError(true);
      setPasswordErrorMessage("Password is a required field.");
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    if (email && isValidEmail(email) && password) {
      localStorage.setItem("user", JSON.stringify(dataHome));
      router.push("/Home");
    }
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div className="md:px-16 w-full px-10 mt-10 md:w-1/3 bg-slate-100 py-10 rounded-xl shadow-xl">
      <h2 className="font-bold text-2xl">Login</h2>
      <p className="text-sm mt-4">If you already a member, easily log in</p>
      <form className="flex flex-col gap-4 mt-5">
        <CustomInput
          disabled={false}
          error={emailError}
          errorMessage={emailErrorMessage}
          id={"login_email"}
          label={"Email"}
          name={"login_email"}
          placeholder={"exemple@comapny.com"}
          required={true}
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomInput
          disabled={false}
          error={passwordError}
          errorMessage={passwordErrorMessage}
          id={"login_password"}
          label={"Password"}
          name={"login_password"}
          required={true}
          type={"password"}
          placeholder={"••••••••"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex items-start my-3">
          <div className="flex items-center h-5">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            />
          </div>
          <div className="ml-3 text-sm">
            <label for="terms" className="font-meduim text-gray-500">
              Remember Me
            </label>
          </div>
        </div>
        <button
          onClick={handleClickLogin}
          className="bg-slate-500 rounded-xl text-white py-2 hover:scale-105 hover:duration-300"
        >
          Login
        </button>
      </form>
      <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400" />
        <p className="text-center text-sm">OR</p>
        <hr className="border-gray-400" />
      </div>
      <div className="flex space-x-4">
        <ButtonGoogle />
        <ButtonApple />
        <ButtonFacebook />
      </div>
      <p
        onClick={handleClickForgetPassword}
        className="mt-6 text-xs border-b border-gray-400 py-4 hover:underline hover:text-blue-600 hover:cursor-pointer"
      >
        Forget your password?
      </p>
      <div className="text-xs flex justify-between items-center mt-3">
        <p>Don't have an account?</p>
        <button
          onClick={handleClickRegister}
          className="py-2 px-5 bg-white border rounded-xl hover:scale-105 hover:duration-300 hover:bg-slate-200"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;

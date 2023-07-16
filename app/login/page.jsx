"use client";
import ButtonApple from "@/components/ButtonApple";
import { ButtonFacebook } from "@/components/ButtonFacebook";
import ButtonGoogle from "@/components/ButtonGoogle";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomInput from "@/components/CustomInput";

const MyAccount = () => {
  const [showSignup, setShowSignup] = useState(false);
  const handleOnClickRegister = () => {
    setShowSignup(true);
  };
  const handleOnClickLogin = () => {
    setShowSignup(false);
  };
  return (
    <main>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: showSignup ? 0 : 1, scale: showSignup ? 0.9 : 1 }}
        transition={{ duration: 0.5 }}
        className={`pt-16 items-center justify-center flex px-5 md:px-0 ${
          showSignup ? "hidden" : ""
        }`}
      >
        <div className="md:px-16 w-full px-10 mt-10 md:w-1/3 bg-slate-100 py-10 rounded-xl shadow-xl">
          <h2 className="font-bold text-2xl">Login</h2>
          <p className="text-sm mt-4">If you already a member, easily log in</p>
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
            <CustomInput
              disabled={false}
              error={false}
              errorMessage={""}
              id={"login_password"}
              label={"Password"}
              name={"login_password"}
              required={true}
              type={"password"}
              placeholder={"••••••••"}
            />
            <button className="bg-slate-500 rounded-xl text-white py-2 hover:scale-105 hover:duration-300">
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
          <p className="mt-6 text-xs border-b border-gray-400 py-4">
            Forget your password ?
          </p>
          <div className="text-xs flex justify-between items-center mt-3">
            <p>Don't have an account ? </p>
            <button
              className="py-2 px-5 bg-white border rounded-xl hover:scale-105 hover:duration-300 hover:bg-slate-200"
              onClick={handleOnClickRegister}
            >
              Register
            </button>
          </div>
        </div>
      </motion.div>
      <Footer />
    </main>
  );
};

export default MyAccount;

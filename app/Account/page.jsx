"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Login from "./components/Login";
import { motion } from "framer-motion";
import SignUp from "./components/SignUp";
import ForgetPassword from "./components/ForgetPassword";
import VerifyEmail from "./components/VerifyEmail";

const MyAccount = () => {
  const [activeComponent, setActiveComponent] = useState("login");

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };
  const renderComponent = () => {
    switch (activeComponent) {
      case "login":
        return <Login handleComponentChange={handleComponentChange} />;
      case "signup":
        return <SignUp handleComponentChange={handleComponentChange} />;
      case "forgetPassword":
        return <ForgetPassword />;
      case "verifyEmail":
        return <VerifyEmail />;
      default:
        return <Login />;
    }
  };

  return (
    <main>
      <Navbar />
      <motion.div
        key={activeComponent}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="pt-16 items-center justify-center flex px-5 md:px-0"
      >
        {renderComponent()}
      </motion.div>

      <Footer />
    </main>
  );
};

export default MyAccount;

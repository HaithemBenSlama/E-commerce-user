"use client";
import React, { useState } from "react";
import Stepper from "./components/Stepper";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import UserInfo from "./components/UserInfo";
import Address from "./components/Address";
import CreditCard from "./components/CreditCard";
import Finish from "./components/Finish";

const page = () => {
  const [activeStep, setActiveStep] = useState(1);
  const renderComponent = () => {
    switch (activeStep) {
      case 1:
        return (
          <UserInfo activeStep={activeStep} setActiveStep={setActiveStep} />
        );
      case 2:
        return (
          <Address activeStep={activeStep} setActiveStep={setActiveStep} />
        );
      case 3:
        return (
          <CreditCard activeStep={activeStep} setActiveStep={setActiveStep} />
        );
      case 4:
        return <Finish />;
    }
  };
  return (
    <main>
      <Navbar />
      <motion.div
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

export default page;

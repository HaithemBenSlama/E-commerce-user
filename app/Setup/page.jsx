"use client";
import React from "react";
import Stepper from "./components/Stepper";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import UserInfo from "./components/UserInfo";
import Address from "./components/Address";
import CreditCard from "./components/CreditCard";

const page = () => {
  return (
    <main>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="pt-16 items-center justify-center flex px-5 md:px-0"
      >
        <CreditCard />
      </motion.div>

      <Footer />
    </main>
  );
};

export default page;

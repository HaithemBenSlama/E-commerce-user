import { logo } from "@/public/assets/images";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-800 md:p-8 lg:p-10 mt-10 ">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-white"
        >
          <Image src={logo} className="w-36 h-12" alt="logo" />
        </a>
        <p className="my-6 text-gray-400">
          Your one-stop destination for seamless shopping experiences, where
          quality meets convenience and endless possibilities await.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm  sm:text-center text-gray-400">
          © 2023-2024{" "}
          <a href="#" className="hover:underline">
            E-commerce
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

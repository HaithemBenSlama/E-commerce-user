"use client";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { macbook } from "@/public/assets/images";
import Center from "./Center";
import Image from "next/image";

const Featured = ({ data }) => (
  <div className="bg-gray-900 text-white py-5 md:py-10">
    <Center>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 ">
        {/* Column 1 */}
        <div className="order-2 md:order-0 md:-ml-8">
          <h1 className="text-2xl md:text-4xl font-semibold">{data?.p_name}</h1>
          <p className="text-sm md:text-base text-gray-300 mt-4 max-w-xl">
            {data?.p_desc}
          </p>
          <div className="mt-7 space-x-4 flex flex-wrap">
            <button
              type="button"
              className="border border-white text-white hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
            >
              Read more
            </button>
            <button
              type="button"
              className="flex items-center text-black bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
            >
              <FaCartPlus className="mr-2" />
              Add to cart
            </button>
          </div>
        </div>
        {/* Column 2 */}
        <div className="flex items-center justify-center max-h-72 -mt-5">
          <Image src={macbook} alt="product_image" className="w-96" />
        </div>
      </div>
    </Center>
  </div>
);

export default Featured;

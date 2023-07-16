"use client";
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { macbook } from "@/public/assets/images";
import Center from "./Center";
import Image from "next/image";

const Featured = ({ data, refreshCart, setRefreshCart }) => {
  const [showAddedToCart, setShowAddedToCart] = useState(false);

  const handleAddToCart = (item) => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = existingCartItems.find(
      (cartItem) => cartItem.p_id === item.p_id
    );
    if (existingItem) {
      existingItem.count += 1;
    } else {
      item.count = 1;
      existingCartItems.push(item);
    }
    item.priceAfterDiscount = item.p_price * (1 - item.p_discount);
    localStorage.setItem("cart", JSON.stringify(existingCartItems));
    setRefreshCart(!refreshCart);
    setShowAddedToCart(true);

    setTimeout(() => {
      setShowAddedToCart(false);
    }, 2000);
  };

  return (
    <div className="bg-gray-900 text-white py-5 md:py-10">
      <Center>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 ">
          <div className="order-2 md:order-0 md:-ml-8">
            <h1 className="text-2xl md:text-4xl font-semibold">
              {data?.p_name}
            </h1>
            <p className="text-sm md:text-base text-gray-300 mt-4 max-w-xl">
              {data?.p_desc}
            </p>
            <div className="mt-7 space-x-4 flex flex-wrap">
              <a
                type="button"
                className="border border-white text-white hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 hover:cursor-pointer"
                href={"/product/" + data?.p_id}
              >
                Read more
              </a>
              <button
                type="button"
                className="flex items-center text-black bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                onClick={() => handleAddToCart(data)}
                disabled={showAddedToCart}
              >
                {showAddedToCart ? (
                  "Added to cart"
                ) : (
                  <>
                    <FaCartPlus className="mr-2" />
                    Add to cart
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center max-h-72 -mt-5">
            <Image src={macbook} alt="product_image" className="w-96" />
          </div>
        </div>
      </Center>
    </div>
  );
};

export default Featured;

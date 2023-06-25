"use client";
import React, { useState } from "react";
import Image from "next/image";
import { logo } from "@/public/assets/images";
import { IoSearchOutline } from "react-icons/io5";
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { FaStoreAlt } from "react-icons/fa";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div>
              <Image src={logo} alt="logo" className="w-32" />
            </div>
            <div className="hidden md:flex ml-4">
              <div className="h-12 w-[2px] bg-slate-400 mx-2 "></div>
              <div className="navBarHover flex items-center gap-2 text-white">
                <div className="w-4 grid grid-cols-2 gap-[2px]">
                  <AiOutlineHome />
                </div>
                <p className="text-sm font-semibold">Home</p>
              </div>

              <div className="navBarHover flex items-center gap-2 ml-6 text-white">
                <div className="w-4 grid grid-cols-2 gap-[2px]">
                  <FaStoreAlt />
                </div>
                <p className="text-sm font-semibold">All Products</p>
              </div>

              <div className="h-10 ml-10 mt-1 flex flex-1 relative w-96">
                <input
                  className="h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-black duration-200"
                  type="text"
                  placeholder="Search products..."
                />
                <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-slate-400 text-white text-xl hover:cursor-pointer hover:bg-slate-500">
                  <IoSearchOutline />
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="navBarHover flex items-center gap-2 text-white">
              <AiOutlineHeart />
              <div>
                <p className="text-xs">Recorder</p>
                <h2 className="text-base font-semibold -mt-1">My Items</h2>
              </div>
            </div>

            <div className="navBarHover flex items-center gap-2 text-white">
              <AiOutlineUser className="text-lg" />
              <div>
                <p className="text-xs">Sign in</p>
                <h2 className="text-base font-semibold -mt-1">Account</h2>
              </div>
            </div>

            <div className="flex items-center text-white">
              <div className="flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent relative">
                <BsCart2 className="text-2xl" />
                <p className="text-xs">$0.00</p>
                <span className="absolute w-4 h-4 bg-slate-400 text-black -top-1 right-4 rounded-full flex items-center justify-center text-xs">
                  0
                </span>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center justify-between">
            <div className="flex items-center text-white">
              <div className="flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent relative">
                <BsCart2 className="text-2xl" />
                <p className="text-xs">$0.00</p>
                <span className="absolute w-4 h-4 bg-slate-400 text-black -top-1 right-4 rounded-full flex items-center justify-center text-xs">
                  0
                </span>
              </div>
            </div>
            <button
              className="p-2 text-white rounded-md outline-none focus:border-gray-400 navBarHover"
              onClick={() => setNavbar(!navbar)}
            >
              <AiOutlineMenu className="w-8 h-8 focus:border-none active:border-none" />
            </button>
          </div>
        </div>
      </div>
      {navbar && (
        <div class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              class="text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <AiOutlineHome className="mr-5" />
              Home
            </a>
            <a
              href="/"
              class="text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <FaStoreAlt className="mr-5" />
              All product
            </a>
            <a
              href="/"
              class="text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <AiOutlineHeart className="mr-5" />
              Recorder
            </a>
            <a
              href="/"
              class="text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <AiOutlineUser className="mr-5" />
              Account
            </a>
          </div>
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div class="relative">
              <input
                type="text"
                class="bg-gray-700 text-white rounded-md pl-8 pr-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search"
              />
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <IoSearchOutline />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

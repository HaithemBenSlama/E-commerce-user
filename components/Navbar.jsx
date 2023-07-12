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
import Link from "next/link";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="bg-gray-800 fixed w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div>
              <Image src={logo} alt="logo" className="w-32" />
            </div>
            <div className="hidden md:flex ml-4">
              <div className="h-12 w-[2px] bg-slate-400 mx-2 "></div>
              <Link
                className="navBarHover flex items-center gap-2 text-white"
                href={"/Home"}
              >
                <div className="w-4 grid grid-cols-2 gap-[2px]">
                  <AiOutlineHome />
                </div>
                <p className="text-sm font-semibold">Home</p>
              </Link>

              <div className="navBarHover flex items-center gap-2 ml-6 text-white">
                <div className="w-4 grid grid-cols-2 gap-[2px]">
                  <FaStoreAlt />
                </div>
                <Link className="text-sm font-semibold" href={"/products"}>
                  All Products
                </Link>
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
              <Link href={"/whishlist"}>
                <p className="text-xs">Recorder</p>
                <h2 className="text-base font-semibold -mt-1">My Items</h2>
              </Link>
            </div>

            <div className="navBarHover flex items-center gap-2 text-white">
              <AiOutlineUser className="text-lg" />
              <Link href={"/account"}>
                <p className="text-xs">Sign in</p>
                <h2 className="text-base font-semibold -mt-1">Account</h2>
              </Link>
            </div>

            <div className="flex items-center text-white rounded-full hover:bg-slate-500 duration-300 cursor-pointer">
              <Link href={"/carts"}>
                <div className="flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent relative">
                  <BsCart2 className="text-2xl" />
                  <p className="text-xs">$0.00</p>
                  <span className="absolute w-4 h-4 bg-slate-400 text-black -top-1 right-4 rounded-full flex items-center justify-center text-xs">
                    0
                  </span>
                </div>
              </Link>
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="border-b-2 border-gray-50 border-opacity-30 text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <AiOutlineHome className="mr-5" />
              Home
            </a>
            <a
              href="/"
              className="border-b-2 border-gray-50 border-opacity-30 text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <FaStoreAlt className="mr-5" />
              All product
            </a>
            <a
              href="/"
              className="border-b-2 border-gray-50 border-opacity-30 text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <AiOutlineHeart className="mr-5" />
              Recorder
            </a>
            <a
              href="/"
              className="border-b-2 border-gray-50 border-opacity-30 text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-base font-medium flex items-center"
            >
              <AiOutlineUser className="mr-5" />
              Account
            </a>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="relative">
              <input
                type="text"
                className="bg-gray-700 text-white rounded-md pl-8 pr-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
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

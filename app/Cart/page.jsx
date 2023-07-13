"use client";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Orders from "./components/Orders";
import Items from "./components/Items";
import { GrFormPreviousLink } from "react-icons/gr";
import { TbShoppingCartOff } from "react-icons/tb";

const Cart = () => {
  const [data, setData] = useState();
  const [refresh, setRefresh] = useState();
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setData(cart);
  }, []);
  return (
    <main>
      <Navbar />
      <div className="pt-28">
        <section class="pb-24 bg-blueGray-100 overflow-hidden">
          <div class="container px-4 mx-auto">
            <Breadcrumbs terminalPath={"Your cart"} />
            <div class="pb-9 mb-7 text-center ">
              <h2 class="text-3xl xl:text-6xl leading-normal font-heading font-medium text-center">
                Your cart
              </h2>
            </div>
            {data?.length > 0 ? (
              <div class="flex flex-wrap -mx-4 xl:mb-24">
                <div class="w-full md:w-8/12 lg:w-3/4 md:mb-0">
                  {data.map((item, index) => (
                    <Items
                      item={item}
                      key={item?.p_id}
                      index={index}
                      refresh={refresh}
                      setRefresh={setRefresh}
                    />
                  ))}
                </div>
                <Orders refresh={refresh} />
                <div class="md:w-72 hover:cursor-pointer">
                  <a
                    type="button"
                    className="flex items-center justify-center gap-5 py-5 px-5 w-full text-xl leading-6 font-medium tracking-tighter bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                    href="/Home"
                  >
                    <GrFormPreviousLink />
                    Back to shop
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div class="flex items-center justify-center">
                  <div class="flex flex-col items-center justify-center bg-slate-50 w-[500px] rounded-2xl shadow-xl h-72">
                    <div class="text-3xl text-gray-500">
                      <TbShoppingCartOff className="w-32 h-32" />
                    </div>
                    <div class="text-5xl text-gray-500 mt-10">
                      Your cart is empty
                    </div>
                  </div>
                </div>
                <div class="md:w-72 hover:cursor-pointer">
                  <a
                    type="button"
                    className="flex items-center justify-center gap-5 py-5 px-5 w-full text-xl leading-6 font-medium tracking-tighter bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                    href="/Home"
                  >
                    <GrFormPreviousLink />
                    Back to shop
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Cart;

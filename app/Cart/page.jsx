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
  }, [refresh]);
  return (
    <main>
      <Navbar refreshCart={refresh} />
      <div className="pt-28">
        <section className="pb-24 overflow-hidden">
          <div className="container px-4 mx-auto">
            <Breadcrumbs terminalPath={"Your cart"} />
            <div className="pb-9 mb-7 text-center ">
              <h2 className="text-3xl xl:text-6xl leading-normal font-heading font-medium text-center">
                Your cart
              </h2>
            </div>
            {data?.length > 0 ? (
              <div className="flex flex-wrap -mx-4 xl:mb-24">
                <div className="w-full md:w-8/12 lg:w-3/4 md:mb-0">
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
                <Orders refresh={refresh} setRefresh={setRefresh} />
                <div className="md:w-72 hover:cursor-pointer">
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
                <div className="flex items-center justify-center p-5 md:p-0">
                  <div className="flex flex-col items-center justify-center bg-slate-50 w-[500px] rounded-2xl shadow-xl h-72">
                    <div className="text-3xl text-gray-500">
                      <TbShoppingCartOff className="w-28 h-28" />
                    </div>
                    <div className="text-3xl md:text-5xl text-gray-500 mt-10">
                      Your cart is empty
                    </div>
                  </div>
                </div>
                <div className="md:w-72 hover:cursor-pointer">
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

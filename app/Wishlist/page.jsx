"use client";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { BsFillHeartbreakFill } from "react-icons/bs";
import { GrFormPreviousLink } from "react-icons/gr";

const Wishlist = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));
    setData(wishlist);
  }, [refresh]);

  return (
    <main>
      <Navbar refreshCart={refresh} />
      <div className="pt-28">
        <section class="pb-24 bg-blueGray-100 overflow-hidden">
          <div class="container px-4 mx-auto">
            <Breadcrumbs terminalPath={"Your wishlist"} />
            <div class="pb-9 mb-7 text-center border-b-2 border-black border-opacity-5">
              <h2 class="text-3xl xl:text-6xl leading-normal font-heading font-medium text-center">
                Your Wishlist
              </h2>
            </div>
            {data?.length > 0 ? (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
                  {data?.map((item) => (
                    <Card
                      data={item}
                      key={item.p_id}
                      refreshCart={refresh}
                      setRefreshCart={setRefresh}
                    />
                  ))}
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
            ) : (
              <div>
                <div class="flex items-center justify-center p-5 md:p-0">
                  <div class="flex flex-col items-center justify-center bg-slate-50 w-[600px] rounded-2xl shadow-xl h-72">
                    <div class="text-3xl text-gray-500">
                      <BsFillHeartbreakFill className="w-28 h-28" />
                    </div>
                    <div class="text-3xl md:text-5xl text-gray-500 mt-10">
                      Your whislist is empty
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

export default Wishlist;

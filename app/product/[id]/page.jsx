"use client";
import React, { useState } from "react";
import LeftContent from "./component/LeftContent";
import { dataProduct } from "./variables/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RightSide from "./component/RightSide";
import { usePathname } from "next/navigation";
import { GrFormPreviousLink } from "react-icons/gr";
import { PiSmileySadLight } from "react-icons/pi";

const page = () => {
  const pathname = usePathname();
  const parts = pathname.split("/"); // Split the URL by "/"
  const productId = parseInt(parts[parts.length - 1]);
  const data = dataProduct;
  const item = productId ? data.find((d) => d.p_id === productId) : null;
  const [refreshCart, setRefreshCart] = useState(false);

  return (
    <main>
      <Navbar refreshCart={refreshCart} setRefreshCart={setRefreshCart} />
      <div className="pt-10">
        <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
          {item ? (
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 py-5">
                  <Breadcrumbs
                    path={[{ text: "Store", href: "/Store" }]}
                    terminalPath={item?.p_name}
                  />
                </div>
                <LeftContent data={item} />
                <RightSide
                  item={item}
                  refreshCart={refreshCart}
                  setRefreshCart={setRefreshCart}
                />
              </div>
            </div>
          ) : (
            <div className="py-5 px-5">
              <div className="flex items-center justify-center p-5 md:p-0">
                <div className="flex flex-col items-center justify-center bg-slate-50 w-[600px] rounded-2xl shadow-xl h-72">
                  <div className="text-3xl text-gray-500">
                    <PiSmileySadLight className="w-28 h-28" />
                  </div>
                  <div className="text-2xl md:text-4xl text-gray-500 mt-10">
                    Oups ! Product Not Found
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
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default page;

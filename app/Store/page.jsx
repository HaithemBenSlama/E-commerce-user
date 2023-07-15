"use client";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import React, { useState } from "react";
import ProductBanner from "./components/ProductBanner";
import Pagination from "./components/Pagination";
import ShopSideNav from "./components/ShopSideNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Store = () => {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };
  const [refresh, setRefresh] = useState(false);

  return (
    <main>
      <Navbar refreshCart={refresh} />
      <div className="pt-28">
        <section className="pb-24 bg-blueGray-100 overflow-hidden">
          <div className="container px-4 mx-auto">
            <Breadcrumbs
              path={[{ text: "Store", href: "/Store" }]}
              terminalPath={"All Products"}
            />
            <div className="pb-9 mb-7 text-center ">
              <h2 className="text-3xl xl:text-6xl leading-normal font-heading font-medium text-center">
                Store
              </h2>
            </div>
            <div className="max-w-container mx-auto px-4">
              <div className="w-full h-full flex pb-20 gap-10">
                <div className="w-[20%] lg:w-[25%] hidden md:inline-flex h-full">
                  <ShopSideNav />
                </div>
                <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
                  <ProductBanner
                    itemsPerPageFromBanner={itemsPerPageFromBanner}
                  />
                  <Pagination
                    itemsPerPage={itemsPerPage}
                    refresh={refresh}
                    setRefresh={setRefresh}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="-mt-24">
        <Footer />
      </div>
    </main>
  );
};

export default Store;

"use client";
import React from "react";
import LeftContent from "./component/LeftContent";
import { dataProduct } from "./variables/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RightSide from "./component/RightSide";

const page = () => {
  const item = dataProduct;

  return (
    <main>
      <Navbar />
      <div className="pt-10">
        <section class="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
          <div class="container px-4 mx-auto">
            <div class="flex flex-wrap -mx-4">
              <div class="w-full px-4 py-5">
                <Breadcrumbs
                  path={[{ text: "Store", href: "/Store" }]}
                  terminalPath={item?.p_name}
                />
              </div>
              <LeftContent data={item} />
              <RightSide item={item} />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default page;

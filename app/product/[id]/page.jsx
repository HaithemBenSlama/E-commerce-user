"use client";
import React, { useState } from "react";
import LeftContent from "./component/LeftContent";
import { dataProduct } from "./variables/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RightSide from "./component/RightSide";

const page = () => {
  const item = dataProduct;
  const [refreshCart, setRefreshCart] = useState(false);

  return (
    <main>
      <Navbar refreshCart={refreshCart} setRefreshCart={setRefreshCart} />
      <div className="pt-10">
        <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
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
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default page;

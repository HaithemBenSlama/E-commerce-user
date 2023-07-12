"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import Featured from "./components/Featured";
import NewArrivals from "./components/NewArrivals";
import { dataHome } from "./variables/data";
const page = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Featured data={dataHome?.featureProduct} />
        <NewArrivals data={dataHome?.newArrivals} />
      </div>
    </main>
  );
};

export default page;

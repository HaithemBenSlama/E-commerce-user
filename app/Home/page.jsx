"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import Featured from "./components/Featured";
import NewArrivals from "./components/NewArrivals";
import { dataHome } from "./variables/data";
import Banner from "./components/Banner";
import BestSells from "./components/BestSales";
import BestRating from "./components/BestRating";
const page = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Featured data={dataHome?.featureProduct} />
        <NewArrivals data={dataHome?.newArrivals} />
        <Banner />
        <BestSells data={dataHome?.newArrivals} />
        <BestRating data={dataHome?.newArrivals} />
      </div>
    </main>
  );
};

export default page;

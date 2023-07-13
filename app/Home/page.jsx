"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Featured from "./components/Featured";
import NewArrivals from "./components/NewArrivals";
import { dataHome } from "./variables/data";
import Banner from "./components/Banner";
import BestSells from "./components/BestSales";
import BestRating from "./components/BestRating";
import Footer from "@/components/Footer";
const page = () => {
  const [refreshCart, setRefreshCart] = useState();
  return (
    <main>
      <Navbar refreshCart={refreshCart} />
      <div className="pt-20">
        <Featured
          data={dataHome?.featureProduct}
          refreshCart={refreshCart}
          setRefreshCart={setRefreshCart}
        />
        <NewArrivals
          data={dataHome?.newArrivals}
          refreshCart={refreshCart}
          setRefreshCart={setRefreshCart}
        />
        <Banner />
        <BestSells
          data={dataHome?.newArrivals}
          refreshCart={refreshCart}
          setRefreshCart={setRefreshCart}
        />
        <BestRating
          data={dataHome?.newArrivals}
          refreshCart={refreshCart}
          setRefreshCart={setRefreshCart}
        />
      </div>
      <Footer />
    </main>
  );
};

export default page;

import React from "react";
import Category from "./Category";
import Brand from "./Brand";
import Price from "./Price";

const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category icons={false} />
      <Brand />
      <Price />
    </div>
  );
};

export default ShopSideNav;

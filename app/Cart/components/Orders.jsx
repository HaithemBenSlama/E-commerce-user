import React, { useEffect, useState } from "react";

const Orders = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let itemCount = 0;
    let totalAmount = 0;

    cartItems.forEach((item) => {
      itemCount += item.count || 1;
      totalAmount += (item.count || 1) * item.priceAfterDiscount;
    });

    setCartItemCount(itemCount);
    setCartTotalAmount(totalAmount);
  }, []);
  return (
    <div class="w-full md:w-4/12 lg:w-1/4">
      <div className="bg-slate-200 p-5 mx-5 md:mx-0 rounded-xl shadow-xl">
        <div class="pb-9 mb-7 text-center border-b border-black border-opacity-5">
          <h2 class="text-3xl leading-normal font-heading font-medium text-center">
            Order Summary
          </h2>
        </div>
        <div class="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
          <span>Subtotal</span>
          <span class="flex items-center text-xl">
            <span class="mr-2 text-base">$</span>
            <span>710,70</span>
          </span>
        </div>
        <div class="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
          <span>Shipping</span>
          <span class="flex items-center text-xl">
            <span class="mr-2 text-base">$</span>
            <span>-</span>
          </span>
        </div>
        <div class="flex items-center justify-between py-4 px-10 mb-14 leading-8 bg-white font-heading font-medium rounded-3xl">
          <span>Total</span>
          <span class="flex items-center text-xl text-blue-500">
            <span class="mr-2 text-base">$</span>
            <span>700,70</span>
          </span>
        </div>
        <a
          class="inline-block w-full py-5 lg:py-3 px-10 text-lg leading-6 lg:leading-7 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
          href="#"
        >
          Checkout
        </a>
      </div>
    </div>
  );
};

export default Orders;

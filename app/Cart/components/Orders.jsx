import React, { useEffect, useState, refresh, setRefresh } from "react";
import { AiOutlineClear } from "react-icons/ai";

const Orders = ({ refresh, setRefresh }) => {
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setRefresh(!refresh);
  };
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let totalAmount = 0;

    cartItems.forEach((item) => {
      totalAmount += (item.count || 0) * item.priceAfterDiscount;
    });

    setCartTotalAmount(totalAmount);
  }, [refresh]);
  return (
    <div class="w-full md:w-4/12 lg:w-1/4">
      <div className="w-full justify-end flex p-5 h-20">
        <button
          onClick={handleClearCart}
          className="flex justify-center items-center bg-red-700 text-slate-100 text-xl leading-6 font-medium tracking-tighter px-7 hover:cursor-pointer focus:ring-2 rounded-xl hover:scale-110 hover:duration-200"
        >
          <AiOutlineClear className="w-5 h-5 mr-2" /> Clear Cart
        </button>
      </div>

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
            <span>{cartTotalAmount.toFixed(2)}</span>
          </span>
        </div>
        <div class="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
          <span>Shipping</span>
          <span class="flex items-center text-xl">
            <span class="mr-2 text-base">$</span>
            <span>{cartTotalAmount > 100 ? 0 : 15.99}</span>
          </span>
        </div>
        <div class="flex items-center justify-between py-4 px-10 mb-14 leading-8 bg-white font-heading font-medium rounded-3xl">
          <span>Total</span>
          <span class="flex items-center text-xl text-blue-500">
            <span class="mr-2 text-base">$</span>
            <span>
              {cartTotalAmount > 100
                ? cartTotalAmount.toFixed(2)
                : (cartTotalAmount + 15.99).toFixed(2)}
            </span>
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

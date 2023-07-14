import Rating from "@/components/Rating";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import ShippingInfo from "./ShippingInfo";

const RightSide = ({ item }) => {
  const calculateDiscountedPrice = (price, discount) => {
    const discountedPrice = price * (1 - discount);
    return discountedPrice.toFixed(0);
  };
  return (
    <div class="w-full lg:w-1/2 px-4">
      <div class="max-w-lg mb-6">
        <span class="text-xs text-gray-400 tracking-wider">
          {item?.p_brand} {item.p_sku}
        </span>
        <h2 class="mt-6 mb-4 text-3xl md:text-4xl lg:text-4xl font-heading font-semibold">
          {item?.p_name}
        </h2>
        <p class="flex items-center mb-6">
          {item?.p_discount === 0 ? (
            <span className="md:text-2xl text-2xl font-bold text-blue-500">
              {"$" + item?.p_price}
            </span>
          ) : (
            <>
              <span className=" font-medium text-2xl text-red-700 line-through">
                {"$" + item?.p_price}
              </span>
              <span className="text-3xl ml-2 text-blue-500 font-medium">
                {"$" +
                  calculateDiscountedPrice(item?.p_price, item?.p_discount)}
              </span>
            </>
          )}
        </p>
        <p class="text-lg text-gray-400">{item?.p_desc}</p>
      </div>
      <Rating rate={item?.p_rating} />
      <div class="mb-6">
        <h4 class="mb-3 font-heading font-medium text-lg">
          <span>Stock:</span>
          {item?.p_stock > 0 ? (
            <span className="text-green-500 font-medium text-xl ml-5">
              Available{" (" + item?.p_stock + ") "}
            </span>
          ) : (
            <span className="text-red-500 font-medium text-xl ml-5">
              Unavailable
            </span>
          )}
        </h4>
      </div>
      <div class="mb-6 flex flex-row items-center">
        <h4 class="mb-3 font-heading font-medium text-lg mr-10">Qty:</h4>
        <input
          class="w-24 px-3 py-2 text-center bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
          type="text"
          placeholder="1"
        />
      </div>

      <div class="flex flex-wrap -mx-2 mb-12">
        <div class="w-full md:w-2/3 px-2 mb-2 md:mb-0">
          <a
            class="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
            href="#"
          >
            Add to cart
          </a>
        </div>
        <div class="w-full md:w-1/3 px-2">
          <a
            class="flex w-full py-4 px-2 items-center justify-center leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-slate-100 focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-xl"
            href="#"
          >
            <span class="mr-2">Wishlist</span>
            <AiOutlineHeart className="w-7 h-7" />
          </a>
        </div>
      </div>
      <div>
        <h4 class="mb-6 font-heading font-medium">More information</h4>
        <ShippingInfo />
      </div>
    </div>
  );
};

export default RightSide;

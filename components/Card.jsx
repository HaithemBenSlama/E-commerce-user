import React from "react";
import Rating from "./Rating";

const Card = ({ data }) => {
  const calculateDiscountedPrice = (price, discount) => {
    const discountedPrice = price * (1 - discount);
    return discountedPrice.toFixed(0);
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow md:hover:scale-105 md:hover:duration-300 md:hover:bg-slate-100 md:hover:cursor-pointer md:hover:shadow-2xl">
      <a href="#">
        <img
          className="p-8 rounded-t-lg object-contain h-40 mx-auto"
          src={data?.p_photo}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h1 className="text-xl font-semibold tracking-tight text-gray-900 md:h-16 overflow-hidden overflow-ellipsis">
            <span className="line-clamp-2">{data?.p_name}</span>
          </h1>
        </a>
        <Rating rate={data?.p_rating} />
        <div className="flex items-center justify-between">
          {data?.p_discount === 0 ? (
            <span className="md:text-2xl text-2xl font-bold text-gray-900">
              {"$" + data?.p_price}
            </span>
          ) : (
            <div>
              <span className="text-base font-medium text-red-700 line-through">
                {"$" + data?.p_price}
              </span>
              <span className="text-xl font-bold ml-2">
                {"$" +
                  calculateDiscountedPrice(data?.p_price, data?.p_discount)}
              </span>
            </div>
          )}

          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

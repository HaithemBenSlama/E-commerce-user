import Rating from "@/components/Rating";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Items = ({ index, item, setRefresh, refresh }) => {
  const [number, setNumber] = useState(item?.count);
  const cart = JSON.parse(localStorage.getItem("cart"));

  const handlePlusButton = () => {
    setNumber(number + 1);
    cart[index].count = cart[index].count + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    setRefresh(!refresh);
  };

  const handleMinusButton = () => {
    if (number > 1) {
      setNumber(number - 1);
      cart[index].count = cart[index].count - 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      setRefresh(!refresh);
    }
  };
  const handleRemoveButton = () => {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    setRefresh(!refresh);
  };

  return (
    <div className="pb-10 px-3 md:px-10 bg-white rounded-3xl">
      <div className="border-b border-gray-200 border-opacity-30">
        <div className="rounded-lg ">
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src={item?.p_photo}
              alt="product-image"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                  {item?.p_name}
                </h2>
                <Rating rate={item?.p_rating} />
                {item?.p_discount === 0 ? (
                  <span className="md:text-2xl text-2xl font-bold text-gray-900">
                    {"$" + item?.p_price}
                  </span>
                ) : (
                  <div>
                    <span className="text-base font-medium text-red-700 line-through">
                      {"$" + item?.p_price}
                    </span>
                    <span className="text-xl font-bold ml-2">
                      {"$" + item?.priceAfterDiscount}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center space-x-3">
                  <button
                    className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                    onClick={handleMinusButton}
                  >
                    <span className="sr-only">Quantity button</span>
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <div>
                    <input
                      type="number"
                      id="first_product"
                      className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
                      value={number}
                      min={0}
                      readOnly
                    />
                  </div>
                  <button
                    className="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                    onClick={handlePlusButton}
                  >
                    <span className="sr-only">Quantity button</span>
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center space-x-4 hover:scale-110 hover:duration-200">
                  <a
                    href="#"
                    className=" flex font-medium text-red-600 hover:underline justify-center items-center"
                    onClick={handleRemoveButton}
                  >
                    <AiOutlineDelete className="w-5 h-5 mr-2" /> Remove
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;

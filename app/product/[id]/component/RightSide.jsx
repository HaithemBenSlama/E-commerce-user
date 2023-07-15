import React, { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import ShippingInfo from "./ShippingInfo";
import Review from "./Review";

const RightSide = ({ item, refreshCart, setRefreshCart }) => {
  const [number, setNumber] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [isItemInWishlist, setIsItemInWishlist] = useState(false);

  const calculateDiscountedPrice = (price, discount) => {
    const discountedPrice = price * (1 - discount);
    return discountedPrice.toFixed(0);
  };

  const handlePlusButton = () => {
    setNumber(number + 1);
  };

  const handleMinusButton = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const handleAddToCart = (item) => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = existingCartItems.find(
      (cartItem) => cartItem.p_id === item.p_id
    );

    const newItem = {
      p_id: item.p_id,
      p_discount: item.p_discount,
      p_price: item.p_price,
      p_name: item.p_name,
      p_photo: item.p_photo,
      p_rating: item.p_rating,
    };

    const selectedQuantity = existingItem
      ? existingItem.count + number
      : number;

    if (item.p_stock < selectedQuantity) {
      setErrorMessage("Selected quantity exceeds available stock.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }

    if (existingItem) {
      existingItem.count += number;
    } else {
      newItem.count = number;
      existingCartItems.push(newItem);
    }

    newItem.priceAfterDiscount = newItem.p_price * (1 - item.p_discount);

    localStorage.setItem("cart", JSON.stringify(existingCartItems));
    setRefreshCart(!refreshCart);
  };

  const handleAddToWishlist = (item) => {
    const existingWishlistItems =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const itemExistsInWishlist = existingWishlistItems.some(
      (wishlistItem) => wishlistItem.p_id === item.p_id
    );

    if (itemExistsInWishlist) {
      const updatedWishlistItems = existingWishlistItems.filter(
        (wishlistItem) => wishlistItem.p_id !== item.p_id
      );
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlistItems));
      setIsItemInWishlist(false);
    } else {
      const newItem = {
        p_id: item.p_id,
        p_discount: item.p_discount,
        p_price: item.p_price,
        p_name: item.p_name,
        p_photo: item.p_photo,
        p_rating: item.p_rating,
      };
      const updatedWishlistItems = [...existingWishlistItems, newItem];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlistItems));
      setIsItemInWishlist(true);
    }
  };

  return (
    <div className="w-full lg:w-1/2 px-4">
      <div className="max-w-lg mb-6">
        <span className="text-xs text-gray-400 tracking-wider">
          {item?.p_brand} {item.p_sku}
        </span>
        <h2 className="mt-6 mb-4 text-3xl md:text-4xl lg:text-4xl font-heading font-semibold">
          {item?.p_name}
        </h2>
        <p className="flex items-center mb-6">
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
        <p className="text-lg text-gray-400">{item?.p_desc}</p>
      </div>

      <div className="mb-6">
        <h4 className="mb-3 font-heading font-medium text-lg">
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

      <div className="mb-6 flex flex-row items-center">
        <h4 className="mb-3 font-heading font-medium text-lg mr-10">Qty:</h4>
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
      </div>

      {errorMessage && (
        <p className="text-red-500 text-lg font-medium my-2">{errorMessage}</p>
      )}

      <div className="flex flex-wrap -mx-2 mb-12">
        <div className="w-full md:w-2/3 px-2 mb-2 md:mb-0">
          <a
            className="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl hover:cursor-pointer"
            onClick={() => handleAddToCart(item)}
          >
            Add to cart
          </a>
        </div>
        <div className="w-full md:w-1/3 px-2">
          <a
            className="flex w-full py-4 px-2 items-center justify-center leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-slate-100 focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-xl hover:cursor-pointer"
            onClick={() => handleAddToWishlist(item)}
          >
            <span className="mr-2">Wishlist</span>
            {isItemInWishlist ? (
              <AiFillHeart className="text-red-500 text-xl w-7 h-7" />
            ) : (
              <AiOutlineHeart className="text-red-500 text-xl w-7 h-7 " />
            )}
          </a>
        </div>
      </div>

      <div>
        <h4 className="mb-6 font-heading font-medium">More information</h4>
        <ShippingInfo />
        <Review />
      </div>
    </div>
  );
};

export default RightSide;

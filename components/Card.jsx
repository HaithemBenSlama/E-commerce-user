import React, { useState, useEffect } from "react";
import Rating from "./Rating";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
import { motion } from "framer-motion";

const Card = ({ data, refreshCart, setRefreshCart }) => {
  const calculateDiscountedPrice = (price, discount) => {
    const discountedPrice = price * (1 - discount);
    return discountedPrice.toFixed(0);
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isItemInWishlist, setIsItemInWishlist] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    const existingWishlistItems =
      JSON.parse(localStorage.getItem("wishlist")) || [];
    const itemExists = existingWishlistItems.some(
      (item) => item.p_id === data?.p_id
    );
    setIsItemInWishlist(itemExists);
  }, [data]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddToCart = (item) => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = existingCartItems.find(
      (cartItem) => cartItem.p_id === item.p_id
    );
    if (existingItem) {
      existingItem.count += 1;
    } else {
      item.count = 1;
      existingCartItems.push(item);
    }
    item.priceAfterDiscount = item.p_price * (1 - item.p_discount);
    localStorage.setItem("cart", JSON.stringify(existingCartItems));
    setRefreshCart(!refreshCart);
    setShowTranslation(true);

    setTimeout(() => {
      setShowTranslation(false);
    }, 2000);
  };

  const handleAddToWishlist = (item) => {
    const existingWishlistItems =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isItemInWishlist) {
      const updatedWishlistItems = existingWishlistItems.filter(
        (wishlistItem) => wishlistItem.p_id !== item.p_id
      );
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlistItems));
      setIsItemInWishlist(false);
    } else {
      const updatedWishlistItems = [...existingWishlistItems, item];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlistItems));
      setIsItemInWishlist(true);
    }
    setRefreshCart(!refreshCart);
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow md:hover:scale-105 md:hover:duration-300 md:hover:bg-slate-100 md:hover:cursor-pointer md:hover:shadow-2xl">
        <a href={"/product/" + data?.p_id}>
          <img
            className="p-8 rounded-t-lg object-contain h-52 mx-auto"
            src={data?.p_photo}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href={"/product/" + data?.p_id}>
            <h1 className="text-xl font-semibold tracking-tight text-gray-900 md:h-16 overflow-hidden overflow-ellipsis">
              <span className="line-clamp-2">{data?.p_name}</span>
            </h1>
          </a>
          <a href={"/product/" + data?.p_id}>
            <Rating rate={data?.p_rating} />
          </a>
          <div className="flex items-center justify-between">
            {data?.p_discount === 0 ? (
              <a href={"/product/" + data?.p_id}>
                <span className="md:text-2xl text-2xl font-bold text-gray-900">
                  {"$" + data?.p_price}
                </span>
              </a>
            ) : (
              <a href={"/product/" + data?.p_id}>
                <span className="text-base font-medium text-red-700 line-through">
                  {"$" + data?.p_price}
                </span>
                <span className="text-xl font-bold ml-2">
                  {"$" +
                    calculateDiscountedPrice(data?.p_price, data?.p_discount)}
                </span>
              </a>
            )}
            {showTranslation ? (
              <div className="bg-blue-700 text-white rounded-lg p-3 absolute z-10 duration-500">
                Product added to cart!
              </div>
            ) : (
              <div className="flex justify-between my-auto items-center">
                <div
                  className="hover:scale-150 duration-300 mr-4 hover:cursor-pointer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleAddToWishlist(data)}
                >
                  {isItemInWishlist || isHovered ? (
                    <AiFillHeart className="text-red-500 text-xl w-7 h-7" />
                  ) : (
                    <AiOutlineHeart className="text-red-500 text-xl w-7 h-7 " />
                  )}
                </div>
                <a
                  onClick={() => handleAddToCart(data)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center hover:scale-125 hover:duration-200"
                >
                  <BiCartAdd className="w-5 h-5 " />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <div className="text-6xl text-gray-500 animate-pulse scale-animation">
          🛒
        </div>
        <p className="text-gray-500 mt-4 text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;

"use client";
import React, { useState } from "react";
import SideImageContainer from "./SideImageContainer";
import MainImage from "./MainImage";
import Feedback from "./Feedback";

const LeftContent = ({ data }) => {
  const [mainImageUrl, setMainImageUrl] = useState(data?.p_photo);

  const handleImageClick = (imageUrl) => {
    setMainImageUrl(imageUrl);
  };

  return (
    <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
      <div className="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
        <SideImageContainer data={data} onImageClick={handleImageClick} />
        <MainImage imageUrl={mainImageUrl} />
      </div>
      <div className="hidden md:block">
        <Feedback data={data} key={data?.p_id} />
      </div>
    </div>
  );
};

export default LeftContent;

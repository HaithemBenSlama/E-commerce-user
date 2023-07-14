"use client";
import React, { useState } from "react";
import SideImage from "./SideImage";

const SideImageContainer = ({ data, onImageClick }) => {
  const [selectedImage, setSelectedImage] = useState(data?.p_photo);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    onImageClick(imageUrl);
  };
  return (
    <div class="w-full sm:w-auto min-w-max px-4 text-center flex sm:flex-col items-center justify-center">
      <a
        class="inline-block sm:mb-12 mr-4 sm:mr-0 transform -rotate-90 sm:transform-none hover:text-blue-400"
        href="#"
      >
        <svg
          width="12"
          height="8"
          viewbox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.54064 7.21015C1.18719 7.59662 0.615928 7.59662 0.265087 7.21015C-0.087058 6.82369 -0.0896663 6.19929 0.265087 5.81282L5.36206 0.289847C5.71421 -0.0966173 6.28416 -0.0966172 6.63892 0.289847L11.7359 5.81282C12.088 6.19785 12.088 6.82369 11.7359 7.21015C11.3824 7.59662 10.8112 7.59662 10.4603 7.21015L5.99853 2.68073L1.54064 7.21015Z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
      <SideImage
        imageUrl={data?.p_photo}
        onClick={() => handleImageClick(data?.p_photo)}
        isSelected={selectedImage === data?.p_photo}
      />
      <SideImage
        imageUrl={data?.p_img2}
        onClick={() => handleImageClick(data?.p_img2)}
        isSelected={selectedImage === data?.p_img2}
      />
      <SideImage
        imageUrl={data?.p_img3}
        onClick={() => handleImageClick(data?.p_img3)}
        isSelected={selectedImage === data?.p_img3}
      />
      <SideImage
        imageUrl={data?.p_img4}
        onClick={() => handleImageClick(data?.p_img4)}
        isSelected={selectedImage === data?.p_img4}
      />
      <a
        class="inline-block transform -rotate-90 sm:transform-none md:mt-5 hover:text-blue-400"
        href="#"
      >
        <svg
          width="12"
          height="8"
          viewbox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4594 0.289849C10.8128 -0.0966154 11.3841 -0.0966154 11.7349 0.289849C12.0871 0.676313 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880364 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.0966159 1.53966 0.289848L6.00147 4.81927L10.4594 0.289849Z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default SideImageContainer;

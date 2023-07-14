import React from "react";

const SideImage = ({ imageUrl, onClick, isSelected }) => {
  const handleClick = () => {
    onClick(imageUrl);
  };

  return (
    <a
      className={`h-30 block mb-4 mr-2 sm:mr-0 ${
        isSelected ? "border-2 rounded-md shadow-lg" : ""
      }`}
      href="#"
      onClick={handleClick}
    >
      <img className="h-20 w-20" src={imageUrl} alt="" />
    </a>
  );
};

export default SideImage;

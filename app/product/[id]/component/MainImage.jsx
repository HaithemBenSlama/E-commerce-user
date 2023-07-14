import React, { useState } from "react";

const MainImage = ({ imageUrl }) => {
  const [zoomed, setZoomed] = useState(false);
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    setZoomed(true);
    setXOffset(x);
    setYOffset(y);
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };

  return (
    <div
      className={`w-full sm:w-9/12 mx-10 md:mx-0 md:ml-5 border-2 border-black p-10 rounded-xl justify-center items-center ${
        zoomed ? "cursor-zoom-in" : ""
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-center relative overflow-hidden">
        <div className="relative">
          <img
            className={`mb-5 w-[300px] md:w-[400px] ${
              zoomed ? "cursor-zoom-in " : ""
            }`}
            src={imageUrl}
            alt=""
          />
          {zoomed && (
            <div
              className="absolute top-0 left-0 bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: `-${xOffset * 200}% -${yOffset * 200}%`,
                width: "200%",
                height: "200%",
                transform: "translate(-50%, -50%)",
                top: `${yOffset * 100}%`,
                left: `${xOffset * 100}%`,
              }}
            />
          )}
        </div>
        <p className="text-sm text-gray-800 mt-10">
          Roll over image to zoom in
        </p>
      </div>
    </div>
  );
};

export default MainImage;

import React from "react";

const Title = ({ text }) => {
  return (
    <h2 className="m-5 ml-10 mb-4 md:text-3xl text-xl font-extrabold leading-none tracking-tight text-gray-900">
      {text}
    </h2>
  );
};

export default Title;

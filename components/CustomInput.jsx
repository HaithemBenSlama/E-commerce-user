import React from "react";

const CustomInput = ({
  label,
  placeholder,
  type,
  name,
  id,
  value,
  errorMessage,
  required,
  disabled,
  error,
}) => {
  const errorLabelStyle = "block mb-2 text-sm font-medium text-red-700";
  const labelStyle = "ml-3 block mb-2 text-sm font-medium text-gray-900";
  const inputStyle = "p-2 w-full rounded-xl border text-sm h-12";
  const errorInputStyle =
    "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
  const errorDescStyle = "mt-2 text-sm text-red-600 dark:text-red-500";
  return (
    <div>
      <label htmlFor={name} className={error ? errorLabelStyle : labelStyle}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={error ? errorInputStyle : inputStyle}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        value={value}
      />
      <p className={error ? errorDescStyle : "hidden"}>{errorMessage}</p>
    </div>
  );
};

export default CustomInput;

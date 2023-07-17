import React from "react";

const CustomInput = ({
  disabled,
  error,
  errorMessage,
  id,
  label,
  name,
  placeholder,
  required,
  type,
  value,
  onChange,
}) => {
  const labelStyle = "ml-3 block mb-2 text-sm font-medium text-gray-900";
  const inputStyle = "p-2 w-full rounded-xl border text-sm h-12";
  const errorInputStyle =
    "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
  const errorDescStyle = "mt-2 text-sm text-red-600 dark:text-red-500";

  return (
    <div>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`${inputStyle} ${error ? errorInputStyle : ""}`}
        onChange={onChange}
      />
      {error && <p className={errorDescStyle}>{errorMessage}</p>}
    </div>
  );
};

export default CustomInput;

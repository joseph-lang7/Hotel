import React from "react";

const Input = ({ icon, placeholder, colSpan }) => {
  return (
    <div className={`relative w-full ${colSpan}`}>
      <input
        placeholder={placeholder}
        className="border w-full px-9 py-3 focus:outline-none focus:border-[#B89146]"
      />
      <div className="absolute top-[50%] translate-y-[-50%] ml-3 text-[#B89146]">
        {icon}
      </div>
    </div>
  );
};

export default Input;

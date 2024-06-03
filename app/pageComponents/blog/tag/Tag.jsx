import React from "react";

const Tag = ({ title }) => {
  return (
    <div className="px-5 py-2 border w-min cursor-pointer hover:bg-[#B89146] hover:text-white transition-colors duration-500">
      <p>{title}</p>
    </div>
  );
};

export default Tag;

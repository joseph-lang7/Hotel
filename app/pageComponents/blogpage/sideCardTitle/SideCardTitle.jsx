import React from "react";

const sideCardTitle = ({ title }) => {
  return (
    <div className=" flex flex-col gap-2 py-[25px]">
      <h4 className="text-xl">{title}</h4>
      <span className="bg-[#B89146] h-[2px] w-1/4"></span>
    </div>
  );
};

export default sideCardTitle;

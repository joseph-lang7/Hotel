import React from "react";

const AmenityCard = ({ title, icon }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center text-center md:text-start">
      {/* Logo */}
      <div className="bg-[#F7F7F7] rounded-full w-[110px] h-[110px] flex justify-center items-center text-[#B89146] text-4xl">
        {icon}
      </div>
      {/* Text Container */}
      <div className="flex flex-col gap-2 max-w-[290px]">
        <h5 className="font-extrabold text-lg">{title}</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, vitae?
        </p>
      </div>
    </div>
  );
};

export default AmenityCard;

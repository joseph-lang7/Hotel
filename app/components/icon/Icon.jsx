import React from "react";

const Icon = ({ icon }) => {
  return (
    <div className="bg-transparent text-slate-400 border-slate-400 border-opacity-60 w-[50px] h-[50px] rounded-full border flex justify-center items-center text-lg cursor-pointer hover:bg-[#B89146] hover:text-white transition-all duration-500 hover:border-[#B89146]">
      {icon}
    </div>
  );
};

export default Icon;

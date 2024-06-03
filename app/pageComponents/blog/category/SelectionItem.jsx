"use client";
import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const SelectionItem = ({ category, amount }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div>
          <a
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`${
              isHovered ? "translate-x-2 text-[#B89146]" : "translate-x-0"
            } flex items-center gap-1 transition-all duration-700 cursor-pointer`}
          >
            <MdKeyboardDoubleArrowRight />
            <p>{category}</p>
          </a>
        </div>
        <p
          className={`${
            isHovered && "text-[#B89146]"
          } transition-colors duration-700`}
        >
          ({amount})
        </p>
      </div>
      <div className="w-full">
        <span className="w-full my-5 bg-slate-200 h-[1px] block"></span>
      </div>
    </div>
  );
};

export default SelectionItem;

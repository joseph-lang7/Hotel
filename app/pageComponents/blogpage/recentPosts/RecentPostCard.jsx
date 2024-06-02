import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const RecentPostCard = ({ title, date, imageUrl }) => {
  return (
    <div className="w-full">
      <div className="flex w-full gap-3">
        <div className="max-w-[100px] h-[100px]">
          <img
            src={imageUrl}
            alt="Bedroom"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 text-xs items-center">
            <div className="text-[#B89146]">
              <FaRegCalendarAlt />
            </div>
            <p>{date}</p>
          </div>
          <p>{title}</p>
        </div>
      </div>
      <span className="w-full my-5 bg-slate-200 h-[1px] block"></span>
    </div>
  );
};

export default RecentPostCard;

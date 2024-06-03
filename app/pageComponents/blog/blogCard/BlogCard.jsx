"use client";
import RectangleButton from "@/app/components/rectangle-button/RectangleButton";
import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";
import IconWithText from "./IconWithText";

const BlogCard = ({ title, description, imageUrl, date }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="border">
      <div
        className="w-full h-1/2 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={imageUrl}
          alt="Bedroom"
          className={`${
            isHovered && "scale-110"
          } w-full object-cover transition-all duration-700`}
        />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-11/12 flex flex-col">
          <div className="w-full h-full flex flex-wrap pt-5">
            <IconWithText icon={<IoPersonOutline />} content="Admin" />
            <span className="h-[30px] w-[2px] bg-slate-200"></span>
            <IconWithText icon={<FaRegCalendarAlt />} content={date} />
            <span className="h-[30px] w-[2px] bg-slate-200"></span>
            <IconWithText icon={<FaRegComments />} content="3 comments" />
          </div>
          <span className="h-[2px] my-5 w-full bg-slate-200"></span>

          <div className="flex flex-col gap-5 pb-5">
            <h4 className="text-2xl">{title}</h4>
            <p>{description}</p>
            <RectangleButton content="Read More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

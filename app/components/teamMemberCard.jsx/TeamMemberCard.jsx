"use client";
import React, { useState } from "react";
import Icon from "../icon/Icon";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
const TeamMemberCard = ({ name, position, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-full h-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full">
        <div className="w-full h-full">
          <div
            className={`${
              isHovered ? "h-[100%] opacity-70" : "h-[30%] opacity-0"
            } bg-black transition-all duration-500 h-full w-full absolute bg-cover bg-center`}
          ></div>
          <div
            className="w-full h-[500px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          ></div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="py-5 w-10/12 absolute bg-white bottom-5 flex flex-col items-center gap-3">
          <div className="flex flex-col gap-1 items-center">
            <p className="text-lg">{name}</p>
            <p className="text-sm text-[#B89146]">{position}</p>
          </div>
          <div
            className={`${
              isHovered ? "opacity-100 h-8" : "opacity-0 h-0"
            } flex gap-2 transition-all duration-500 `}
          >
            <Icon icon={<FaFacebookF />} />
            <Icon icon={<FaLinkedinIn />} />
            <Icon icon={<RiTwitterXLine />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

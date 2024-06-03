"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const BlogCard = ({ monthDay, date, description, src, alt }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="xl:w-[450px] w-full h-[450px] relative overflow-hidden"
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      <Link href="/contact">
        <div className="h-3/4 w-full relative overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover hover:scale-125 transition-all duration-500 "
          />
        </div>
      </Link>
      <div className="flex w-full justify-center">
        <div className="bg-white absolute bottom-0 w-11/12 py-10 border flex flex-col justify-center gap-3 items-center px-3">
          <div className="w-full flex h-auto justify-center items-center gap-3">
            <div className="flex flex-col">
              <h5 className="text-3xl font-bold">{monthDay}</h5>
              <p className="text-xs w-[80px]">{date}</p>
            </div>
            <div>
              <p className="text-sm sm:text-xl">{description}</p>
            </div>
          </div>
          <Link
            href="/blog"
            className={`${
              isHovered
                ? "translate-y-10 opacity-100"
                : "translate-y-7 opacity-0"
            } transition-all duration-300 absolute flex items-center hover:text-[#B89146] text-sm sm:text-base `}
          >
            <p>Read More</p>
            <IoIosArrowRoundForward size={40} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

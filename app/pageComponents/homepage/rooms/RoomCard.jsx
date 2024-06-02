import Link from "next/link";
import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

const RoomCard = ({
  imageUrl,
  price,
  roomType,
  colSpan,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`${colSpan} bg-center bg-cover w-full h-[350px] relative text-white`}
      style={{ backgroundImage: `url(/photos/${imageUrl}` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute w-full h-[220px] bottom-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute flex flex-col gap-3 bottom-5 left-5">
        <p className="text-xs font-bold">
          <span className="text-[#B89146]">${price}</span> / Night
        </p>
        <h4 className="text-xl">{roomType}</h4>
        <div
          className={`${
            isHovered
              ? "translate-y-[-10] opacity-100 flex flex-col mt-5"
              : "translate-y-5 opacity-0"
          } transition-all duration-300`}
        >
          <Link
            href="/contact"
            className="hover:text-[#B89146] text-slate-300 transition-colors duration-500 absolute bottom-0 left-0 flex gap-1 items-center "
          >
            <IoIosArrowDropright size={25} />
            <div>Book Now</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

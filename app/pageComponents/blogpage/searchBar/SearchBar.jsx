"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`${
        isFocused && "border-[#B89146]"
      } border py-[25px] px-5 relative w-full`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <input placeholder="Search" className="focus:outline-none" />
      <button className="text-[#B89146] text-xl absolute right-5">
        <IoIosSearch />
      </button>
    </div>
  );
};

export default SearchBar;

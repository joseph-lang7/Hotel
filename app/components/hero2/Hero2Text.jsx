import React from "react";
import Link from "next/link";
const Hero2Text = ({ title }) => {
  return (
    <div className="absolute flex flex-col justify-center items-center w-full h-full text-white font-bold gap-4">
      <h4 className="text-5xl">Our Team</h4>
      <div className="flex gap-1">
        <Link
          className="hover:text-[#b89246] transition-colors duration-500"
          href="/"
        >
          Home
        </Link>
        <p> - </p>
        <p className="text-[#b89246]">{title}</p>
      </div>
    </div>
  );
};

export default Hero2Text;

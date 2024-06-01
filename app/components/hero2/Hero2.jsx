import Link from "next/link";
import React from "react";
import Hero2Text from "./Hero2Text";

const Hero2 = ({ title, imageUrl }) => {
  return (
    <div className="h-[600px] w-full relative">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="absolute w-full h-full bg-black opacity-65"></div>
        <Hero2Text title={title} />
      </div>
    </div>
  );
};

export default Hero2;

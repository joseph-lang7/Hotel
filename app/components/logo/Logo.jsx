import React from "react";
import Image from "next/image";
const Logo = ({ textColor }) => {
  return (
    <div className="flex items-center font-bold z-30">
      <Image src="/logo.png" alt="Hotel logo" width={60} height={60} />
      <h4 className={`text-xl ${textColor}`}>HOTEL</h4>
    </div>
  );
};

export default Logo;

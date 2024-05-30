import React from "react";
import Image from "next/image";
const Logo = ({ textColor }) => {
  return (
    <div className="flex items-center font-bold text-2xl z-50">
      <Image src="/logo.png" alt="Hotel logo" width={70} height={70} />
      <h4 className={`text-2xl ${textColor}`}>HOTEL</h4>
    </div>
  );
};

export default Logo;

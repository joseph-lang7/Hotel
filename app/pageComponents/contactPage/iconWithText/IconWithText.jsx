import React from "react";

const IconWithText = ({ icon, subtitle, contactInfo }) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="text-[#B89146] text-3xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{subtitle}</p>
        <a className="text-xl cursor-pointer hover:text-[#B89146] transition-colors duration-500">
          {contactInfo}
        </a>
      </div>
    </div>
  );
};

export default IconWithText;

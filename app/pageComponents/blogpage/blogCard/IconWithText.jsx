import React from "react";

const IconWithText = ({ icon, content }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:text-[#B89146] transition-colors duration-500 text-sm px-2">
      <div className="text-[#B89146]">{icon}</div>
      <p>{content}</p>
    </div>
  );
};

export default IconWithText;

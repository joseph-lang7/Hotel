import React from "react";

const IconWithText = ({ icon, content }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="text-[#B89146] text-2xl">{icon}</div>
      <a className="text-slate-300 hover:text-[#B89146] transitions-colors duration-500 cursor-pointer">
        {content}
      </a>
    </div>
  );
};

export default IconWithText;

import React from "react";

const RoomButton = ({ content, onClick, selected }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        selected
          ? "bg-[#B89146] text-white text-xs"
          : "bg-white text-xs text-black"
      } px-7 h-[55px]`}
    >
      {content}
    </button>
  );
};

export default RoomButton;

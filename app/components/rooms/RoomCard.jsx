import React from "react";

const RoomCard = ({ imageUrl, price, roomType, colSpan }) => {
  return (
    <div
      className={`${colSpan} bg-center bg-cover w-full h-[350px] relative text-white`}
      style={{ backgroundImage: `url(/photos/${imageUrl}` }}
    >
      <div className="absolute w-full h-[220px] bottom-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute flex flex-col gap-3 bottom-5 left-5">
        <p className="text-xs font-bold">
          <span className="text-[#B89146]">${price}</span> / Night
        </p>
        <h4 className="text-xl">{roomType}</h4>
      </div>
    </div>
  );
};

export default RoomCard;

import React from "react";
import RectangleButton from "../rectangle-button/RectangleButton";
const TextRightCard = ({ src, alt, title, subtitle }) => {
  return (
    <div className="w-full h-min 2xl:h-full flex flex-col 2xl:flex-row relative justify-end">
      <div className="w-full 2xl:w-8/12 h-auto 2xl:h-[600px]">
        <div className="2xl:absolute static inset-0 top-0 2xl:left-0 w-full h-min 2xl:h-full flex 2xl:items-center items-start">
          <div className="h-[500px] 2xl:h-full w-full 2xl:w-1/2 flex 2xl:items-center items-start">
            <img
              src={src}
              alt={alt}
              className="w-full h-full 2xl:max-h-[450px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end w-full  2xl:w-11/12 items-center bg-[#F7F7F7]">
        <div className="flex flex-col w-full 2xl:w-5/6 gap-5 bottom-0 left-5 static p-10 ">
          <p className="text-[#B89146] font-bold text-sm">{subtitle}</p>
          <h4 className="text-3xl">{title}</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium, voluptatem!
          </p>
          <div className="flex">
            <RectangleButton content="Read More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextRightCard;

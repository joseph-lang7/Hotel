import React from "react";
import RectangleButton from "@/app/components/rectangle-button/RectangleButton";
const TextLeftCard = ({ src, alt, title, subtitle }) => {
  return (
    <div className="w-full h-min 2xl:h-full flex flex-col 2xl:flex-row-reverse relative justify-end">
      <div className="w-full 2xl:w-8/12 h-auto 2xl:h-[600px]">
        <div className="2xl:absolute static inset-0 2xl:right-0 max-w-full h-min 2xl:h-full flex 2xl:items-center justify-end">
          <div className="h-[500px] w-full 2xl:w-1/2 flex 2xl:items-center items-start">
            <img
              src={src}
              alt={alt}
              className="w-full h-full 2xl:max-h-[450px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full  2xl:w-11/12 items-center bg-[#F7F7F7] h-full">
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

export default TextLeftCard;

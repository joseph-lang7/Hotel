import React from "react";
import RectangleButton from "../rectangle-button/RectangleButton";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center w-full h-[500px] relative flex justify-center parallax-bg bg-fixed"
      style={{ backgroundImage: "url(/photos/banner-bg.jpg)" }}
    >
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div className="w-full h-full flex items-center text-center absolute px-5 max-w-[800px]">
        <h4 className="text-white text-4xl">
          Book hotel rooms, get deals, & book flights online.
        </h4>
      </div>
    </div>
  );
};

export default Banner;

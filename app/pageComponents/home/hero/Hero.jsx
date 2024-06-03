import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <div
      className="max-w-screen h-[1200px] md:h-[1100px] bg-cover bg-center relative"
      style={{ backgroundImage: "url(/photos/bedroom.jpg)" }}
    >
      <div className="w-full text-white font-bold h-3/4 md:h-full flex items-center justify-center">
        <h1 className="text-center text-5xl md:text-6xl">
          The Best Hotel <span className="block">Deals in the World</span>
        </h1>
      </div>
      <div className="w-full flex justify-center absolute bottom-0 px-5 ">
        <div className="bg-black max-w-[450px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5">
          <div className="flex flex-col gap-2 p-5 justify-center pl-8 ">
            <p className="text-slate-400 text-sm">Check In</p>
            <input
              type="date"
              className=" text-[#B89146] bg-transparent text-xs focus:outline-none cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-2 p-5 justify-center pl-8">
            <p className="text-slate-400 text-sm">Check Out</p>
            <input
              type="date"
              className=" text-[#B89146] bg-transparent border-none text-xs focus:outline-none cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-2 p-5 justify-center pl-8 pr-8">
            <p className="text-slate-400 text-sm">Room</p>
            <select
              name="roomCount"
              id="roomCount"
              className="bg-transparent text-[#B89146] focus:outline-none"
            >
              <option value="1">1 Room</option>
              <option value="2">2 Room</option>
              <option value="3">3 Room</option>
              <option value="4">4 Room</option>
              <option value="5">5 Room</option>
            </select>
          </div>
          <Link href="/contact">
            <div className="h-full w-full">
              <button className="h-full w-full p-5 text-white bg-[#B89146] hover:bg-black transition-colors duration-500">
                Check Now
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

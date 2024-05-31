import React from "react";
import Logo from "../logo/Logo";
import Icon from "../icon/Icon";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { MdMailOutline } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaRegHandPointer } from "react-icons/fa";

import IconWithText from "./IconWithText";

const Footer = () => {
  return (
    <div className="w-full bg-black py-16 h-auto mt-20 ">
      <div className="max-w-screen flex justify-center h-auto mt-2 px-5">
        <div className="grid max-w-[450px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px]  2xl:max-w-[1400px] xl:grid-cols-5 md:grid-cols-2 w-full text-white gap-10">
          <div className="flex flex-col gap-3 max-w-[350px]">
            <Logo textColor="text-white" />
            <p className="text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              odio?
            </p>
            <div className="flex gap-2">
              <Icon icon={<FaFacebookF />} />
              <Icon icon={<RiTwitterXLine />} />
              <Icon icon={<FaLinkedinIn />} />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-xl text-white">Information</h5>{" "}
            <IconWithText icon={<GrMapLocation />} content="Location" />
            <IconWithText icon={<MdMailOutline />} content="info@hotel.com" />
            <IconWithText icon={<MdLocalPhone />} content="123 (456)-7891" />
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-xl text-white">Company</h5>
            <a
              href="/"
              className="text-slate-300 hover:translate-x-3 hover:text-[#B89146] transition-all duration-500"
            >
              About Us
            </a>
            <a
              className="text-slate-300 hover:translate-x-3 hover:text-[#B89146] transition-all duration-500"
              href="/"
            >
              Blog
            </a>
            <a
              className="text-slate-300 hover:translate-x-3 hover:text-[#B89146] transition-all duration-500"
              href="/"
            >
              Contact Us
            </a>
            <a
              className="text-slate-300 hover:translate-x-3 hover:text-[#B89146] transition-all duration-500"
              href="/"
            >
              Room List
            </a>
          </div>
          <div className="flex flex-col gap-4 xl:col-span-2">
            <h5 className="text-xl text-white">Subscribe</h5>
            <div className="flex">
              <input
                type="text"
                placeholder="Email Address"
                className="pl-5 bg-transparent border border-r-0 border-slate-400 border-opacity-60 focus:outline-none focus:border-[#B89146] w-full"
              />
              <button className="px-7 py-5 bg-[#B89146]">
                <FaRegHandPointer />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

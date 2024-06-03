import React from "react";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TiContacts } from "react-icons/ti";
import { LuMessagesSquare } from "react-icons/lu";
import Input from "./components/Input";
import RectangleButton from "@/app/components/rectangle-button/RectangleButton";
import { MdLocalPhone } from "react-icons/md";

const Form = () => {
  return (
    <form className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
      <Input
        icon={<FaRegUser />}
        placeholder="Full name"
        colSpan="col-span-1"
      />
      <Input
        icon={<HiOutlineMailOpen />}
        placeholder="Email"
        colSpan="col-span-1"
      />
      <Input icon={<MdLocalPhone />} placeholder="Phone" colSpan="col-span-1" />
      <Input icon={<TiContacts />} placeholder="Subject" colSpan="col-span-1" />
      <div className="relative grid-cols-1 lg:col-span-2">
        <textarea
          className="border w-full px-9 py-3 focus:outline-none focus:border-[#B89146] h-[400px] resize-none"
          placeholder="Message"
        />
        <div className="absolute top-[21px] ml-3 text-[#B89146]">
          <LuMessagesSquare />
        </div>
      </div>
      <RectangleButton content="Submit" href="/contact" />
    </form>
  );
};

export default Form;

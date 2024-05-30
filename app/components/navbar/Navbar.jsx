"use client";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import RectangleButton from "../rectangle-button/RectangleButton";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Team", href: "/team" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <>
      <nav className="w-screen bg-black py-4 px-10 justify-between flex fixed text-white z-50">
        <div className="flex items-center font-bold text-2xl z-50">Hotel</div>
        <DesktopNav navItems={navItems} />
        <div className="lg:hidden block z-50 text-white">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="hidden lg:block">
          <RectangleButton content="Book Now" bg="bg-white" />
        </div>
      </nav>
      <MobileNav isOpen={isOpen} navItems={navItems} />
    </>
  );
};

export default Navbar;

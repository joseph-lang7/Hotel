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
      <nav className="max-w-screen bg-transparent py-8 px-5 justify-between flex">
        <div className="flex items-center font-bold text-3xl z-50">Hotel</div>
        <DesktopNav navItems={navItems} />
        <div className="text-black lg:hidden block z-50">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="hidden lg:block">
          <RectangleButton content="Book Now" />
        </div>
      </nav>
      <MobileNav isOpen={isOpen} navItems={navItems} />
    </>
  );
};

export default Navbar;

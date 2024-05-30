"use client";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import RectangleButton from "../rectangle-button/RectangleButton";
import Logo from "../logo/Logo";
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
      <nav className="w-full bg-black py-4 px-10 justify-between flex fixed text-white z-50">
        <Logo />
        <DesktopNav navItems={navItems} />
        <div className="lg:hidden flex items-center z-50 text-white">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="hidden lg:flex  lg:items-center">
          <RectangleButton content="Book Now" bg="bg-white" />
        </div>
      </nav>
      <MobileNav isOpen={isOpen} navItems={navItems} />
    </>
  );
};

export default Navbar;

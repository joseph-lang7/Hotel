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
    <nav className="max-w-screen bg-transparent py-8 px-8 justify-between flex">
      <div className="flex items-center z-20">Logo</div>
      <DesktopNav navItems={navItems} />
      <div className="text-black sm:hidden block z-20">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <MobileNav isOpen={isOpen} navItems={navItems} />
      <RectangleButton content="Book Now" />
    </nav>
  );
};

export default Navbar;

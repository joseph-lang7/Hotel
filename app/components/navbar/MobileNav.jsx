const MobileNav = ({ isOpen, navItems }) => {
  return (
    <ul
      className={`${
        isOpen
          ? "translate-x-0 w-screen h-screen bg-white text-black transition-transform duration-700 flex-col absolute inset-0 flex justify-center items-center gap-5 text-2xl sm:hidden"
          : "translate-x-[-200vw] w-screen h-screen bg-white text-black transition-transform duration-700 flex-col absolute inset-0 flex justify-center items-center gap-5 text-2xl sm:hidden"
      }`}
    >
      {" "}
      {navItems.map((navItem) => (
        <li
          className="hover:text-[#b89246] transition-colors duration-300 cursor-pointer"
          key={navItem.href}
        >
          {navItem.label}
        </li>
      ))}
    </ul>
  );
};

export default MobileNav;

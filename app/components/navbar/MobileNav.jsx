const MobileNav = ({ isOpen, navItems }) => {
  return (
    <ul
      className={`${
        isOpen
          ? "translate-x-0 max-w-screen h-screen bg-white text-black transition-transform duration-700 flex-col flex justify-center items-center gap-5 text-2xl lg:hidden fixed inset-0 z-40"
          : "translate-x-[-200vw] max-w-screen h-screen bg-white text-black transition-transform duration-700 flex-col flex justify-center items-center gap-5 text-2xl lg:hidden absolute inset-0 z-40"
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

const DesktopNav = ({ navItems }) => {
  return (
    <ul className=" gap-5 items-center hidden lg:flex">
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

export default DesktopNav;

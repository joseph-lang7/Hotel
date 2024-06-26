import Link from "next/link";
const MobileNav = ({ setOpen, isOpen, navItems }) => {
  return (
    <ul
      className={`${
        isOpen ? "translate-x-0" : "translate-x-[-200vw]"
      } max-w-screen h-screen bg-white text-black transition-transform duration-700 flex-col flex justify-center items-center gap-5 text-2xl lg:hidden fixed inset-0 z-40`}
    >
      {" "}
      {navItems.map((navItem) => (
        <li
          className="hover:text-[#b89246] transition-colors duration-300 cursor-pointer"
          key={navItem.href}
        >
          <Link onClick={() => setOpen(!isOpen)} href={navItem.href}>
            {navItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileNav;

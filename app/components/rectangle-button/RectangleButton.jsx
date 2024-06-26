import Link from "next/link";
const RectangleButton = ({ content, bg, href }) => {
  return (
    <Link href={href}>
      <button
        className={`relative border-2 border-[#b89246] ${bg} py-3 px-8 font-bold uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#b89246] before:transition-transform before:duration-500 hover:text-white before:hover:scale-x-100 md:block w-[210px] text-sm`}
      >
        {content}
      </button>
    </Link>
  );
};

export default RectangleButton;

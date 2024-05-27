const RectangleButton = ({ content }) => {
  return (
    <button
      className={`relative border-2 border-[#b89246] bg-transparent py-3 px-8 font-bold uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#b89246] before:transition-transform before:duration-500 before:content-[''] hover:text-white before:hover:scale-x-100 md:block w-[210px] text-sm `}
    >
      {content}
    </button>
  );
};

export default RectangleButton;

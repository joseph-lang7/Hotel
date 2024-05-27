import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-screen flex justify-center px-12">
      <div className="xl:max-w-[1500px] w-full py-20">{children}</div>
    </div>
  );
};

export default Container;

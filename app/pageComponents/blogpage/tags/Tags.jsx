import React from "react";
import SideCardTitle from "../sideCardTitle/SideCardTitle";
import Tag from "../tag/Tag";
const Tags = () => {
  return (
    <div className="px-5 border w-full">
      <SideCardTitle title="Tags" />
      <div className="grid grid-cols-2 gap-3 pb-[25px]">
        <Tag title="Summer" />
        <Tag title="Sales" />
        <Tag title="Travel" />
        <Tag title="Discount" />
        <Tag title="Deals" />
        <Tag title="Trending" />
      </div>
    </div>
  );
};

export default Tags;

import React from "react";
import SelectionItem from "./SelectionItem";
import SideCardTitle from "../sideCardTitle/SideCardTitle";
const Category = () => {
  return (
    <div className="px-5 border w-full">
      <SideCardTitle title="Category" />
      <SelectionItem category="Luxury Room" amount="2" />
      <SelectionItem category="Single Room" amount="5" />
      <SelectionItem category="Family Room" amount="1" />
      <SelectionItem category="Small Suite" amount="3" />
      <SelectionItem category="Small Suite+" amount="2" />
    </div>
  );
};

export default Category;

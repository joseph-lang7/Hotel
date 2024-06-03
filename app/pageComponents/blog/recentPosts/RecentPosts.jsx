import React from "react";
import SideCardTitle from "../sideCardTitle/SideCardTitle";
import RecentPostCard from "./RecentPostCard";
const RecentPosts = () => {
  return (
    <div className="px-5 border w-full">
      <SideCardTitle title="Recent Posts" />
      <RecentPostCard
        title="Book your next trip"
        date="12 May, 2024"
        imageUrl="https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <RecentPostCard
        title="Ultimate sale this summer"
        date="07 April, 2024"
        imageUrl="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <RecentPostCard
        title="Get the best hotel deals"
        date="03 April, 2024"
        imageUrl="https://images.pexels.com/photos/3659681/pexels-photo-3659681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </div>
  );
};

export default RecentPosts;

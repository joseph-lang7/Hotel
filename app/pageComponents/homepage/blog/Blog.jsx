import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="max-w-screen flex justify-center h-auto mt-2 px-5">
      <div className="flex max-w-[450px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px]  2xl:max-w-[1400px] flex-col gap-10 w-full">
        <div className="flex flex-col items-center">
          <p className="text-[#B89146] max-w-[400px]">Our Blog</p>
          <h4 className="text-3xl leading-[50px] text-center">
            Read Our Blog and News
          </h4>
        </div>
        <div className="flex w-full gap-7 2xl:gap-5 flex-wrap justify-center 2xl:justify-between">
          <BlogCard
            src="https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Photo of hotel room"
            monthDay="22"
            date="Apr 2024"
            description="Find the best prices in the best locations"
          />
          <BlogCard
            src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Photo of hotel room"
            monthDay="29"
            date="Apr 2024"
            description="Discounts for traveling this summer"
          />
          <BlogCard
            src="https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Photo of hotel room"
            monthDay="25"
            date="May 2024"
            description="Our recommended locations to travel"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;

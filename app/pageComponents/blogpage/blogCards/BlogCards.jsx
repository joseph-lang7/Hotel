import React from "react";
import BlogCard from "../blogCard/BlogCard";
const BlogCards = () => {
  return (
    <div className="flex-[3] flex flex-col gap-10 h-min">
      <BlogCard
        title="Book your next Trip"
        date="12 May, 2024"
        description="mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae"
        imageUrl="https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <BlogCard
        title="Ultimate sale this summer"
        date="07 April, 2024"
        description="mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae"
        imageUrl="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <BlogCard
        title="Get the best hotel deals"
        date="03 April, 2024"
        description="mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae"
        imageUrl="https://images.pexels.com/photos/3659681/pexels-photo-3659681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </div>
  );
};

export default BlogCards;

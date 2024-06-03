import Hero2 from "../components/hero2/Hero2";
import {
  BlogCards,
  SearchBar,
  Category,
  RecentPosts,
  Tags,
} from "../pageComponents/blogPage";

const BlogPage = () => {
  return (
    <div>
      <Hero2
        title="Our Blog"
        imageUrl="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <div className="max-w-screen flex justify-center w-full h-auto mt-2 px-5 py-20">
        <div className="flex max-w-[450px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px]  2xl:max-w-[1400px] flex-col xl:flex-row gap-5 w-full">
          <div className="w-full flex justify-center gap-7">
            <BlogCards />
            <div className="flex-1 hidden xl:flex  flex-col gap-5">
              <SearchBar />
              <Category />
              <RecentPosts />
              <Tags />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

import Accommodations from "./pageComponents/homepage/accommodations/Accommodations";
import Amenities from "./pageComponents/homepage/amenities/Amenities";
import Banner from "./pageComponents/homepage/banner/Banner";
import Hero from "./components/hero/Hero";
import Rooms from "./pageComponents/homepage/rooms/Rooms";
import Services from "./pageComponents/homepage/services/Services";
import Carousel from "./pageComponents/homepage/carousel/Carousel";
import Blog from "./pageComponents/homepage/blog/Blog";
export default function Home() {
  return (
    <>
      <Hero />
      <Accommodations />
      <Rooms />
      <Banner />
      <Amenities />
      <Services />
      <Carousel />
      <Blog />
    </>
  );
}

import Accommodations from "./pageComponents/homePage/accommodations/Accommodations";
import Amenities from "./pageComponents/homePage/amenities/Amenities";
import Banner from "./pageComponents/homePage/banner/Banner";
import Hero from "./components/hero/Hero";
import Rooms from "./pageComponents/homePage/rooms/Rooms";
import Services from "./pageComponents/homePage/services/Services";
import Carousel from "./pageComponents/homePage/carousel/Carousel";
import Blog from "./pageComponents/homePage/blog/Blog";
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

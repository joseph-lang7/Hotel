import {
  Accommodations,
  Amenities,
  Banner,
  Blog,
  Carousel,
  Hero,
  Rooms,
  Services,
} from "./pageComponents/homePage";
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

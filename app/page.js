import {
  Accommodations,
  Amenities,
  Banner,
  Blog,
  Carousel,
  Hero,
  Rooms,
  Services,
} from "./pageComponents/home";
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

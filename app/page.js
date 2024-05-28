import Accommodations from "./components/accommodations/Accommodations";
import Banner from "./components/banner/Banner";
import Hero from "./components/hero/Hero";
import Rooms from "./components/rooms/Rooms";
export default function Home() {
  return (
    <>
      <Hero />
      <Accommodations />
      <Rooms />
      <Banner />
    </>
  );
}

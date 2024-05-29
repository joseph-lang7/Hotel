import Accommodations from "./components/accommodations/Accommodations";
import Amenities from "./components/amenities/Amenities";
import Banner from "./components/banner/Banner";
import Hero from "./components/hero/Hero";
import Rooms from "./components/rooms/Rooms";
import Services from "./components/services/Services";
export default function Home() {
  return (
    <>
      <Hero />
      <Accommodations />
      <Rooms />
      <Banner />
      <Amenities />
      <Services />
    </>
  );
}

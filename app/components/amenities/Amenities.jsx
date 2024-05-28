import React from "react";
import AmenityCard from "./AmenityCard";
import { MdOutlineCleaningServices } from "react-icons/md";
import { IoWifiSharp } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";

const Amenities = () => {
  return (
    <div className="max-w-screen flex justify-center h-auto mt-2 px-5 py-20">
      <div className="flex max-w-[450px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px]  2xl:max-w-[1400px] flex-col xl:flex-row gap-5 w-full">
        <div className="flex flex-wrap justify-center md::justify-between gap-12 w-full h-auto">
          <AmenityCard
            title="Room Cleaning"
            icon={<MdOutlineCleaningServices />}
          />
          <AmenityCard title="WiFi" icon={<IoWifiSharp />} />
          <AmenityCard title="Many Locations" icon={<GrMapLocation />} />
        </div>
      </div>
    </div>
  );
};

export default Amenities;

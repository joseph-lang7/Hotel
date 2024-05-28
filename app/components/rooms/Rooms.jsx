"use client";
import React from "react";
import RoomButton from "./RoomButton";
import RoomCard from "./RoomCard";
import { useState } from "react";

const Rooms = () => {
  const [allRooms, setAllRooms] = useState(true);
  const [luxuryRooms, setLuxuryRooms] = useState(false);
  const [singleRooms, setSingleRooms] = useState(false);
  const [smallSuite, setSmallSuite] = useState(false);
  const [familyRoom, setFamilyRoom] = useState(false);

  const [selectedButton, setSelectedButton] = useState("All Rooms");

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="max-w-screen flex justify-center h-auto mt-2 px-5 bg-[#F7F7F7] py-20">
      <div className="flex max-w-[450px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px]  2xl:max-w-[1400px] flex-col xl:flex-row gap-5 w-full">
        <div className="w-full flex flex-col items-center gap-5">
          <div className="w-full flex flex-col xl:flex-row gap-5">
            <div className="flex flex-col gap-1 w-full text-center">
              <p className="text-sm text-[#B89146]">Deluxe And Luxury</p>
              <h4 className="text-4xl">Our Luxury Rooms</h4>
            </div>
            <div className="flex gap-2 flex-wrap w-full justify-center">
              <RoomButton
                onClick={() => handleClick("All Rooms")}
                content="All Rooms"
                selected={selectedButton === "All Rooms"}
              />
              <RoomButton
                onClick={() => handleClick("Luxury")}
                content="Luxury"
                selected={selectedButton === "Luxury"}
              />
              <RoomButton
                onClick={() => handleClick("Single")}
                content="Single"
                selected={selectedButton === "Single"}
              />
              <RoomButton
                onClick={() => handleClick("Small Suite")}
                content="Small Suite"
                selected={selectedButton === "Small Suite"}
              />
              <RoomButton
                onClick={() => handleClick("Family")}
                content="Family"
                selected={selectedButton === "Family"}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full h-auto mt-5">
            {selectedButton === "All Rooms" && (
              <>
                <RoomCard
                  imageUrl="small-suite1.jpg"
                  price="159"
                  roomType="Small Suite"
                  colSpan="col-span-1"
                />
                <RoomCard
                  imageUrl="small-suite2.jpg"
                  price="199"
                  roomType="Small Suite+"
                  colSpan="lg:col-span-2"
                />
                <RoomCard
                  imageUrl="family-room.jpg"
                  price="320"
                  roomType="Family Room"
                  colSpan="col-span-1"
                />
                <RoomCard
                  imageUrl="single-room.jpg"
                  price="149"
                  roomType="Single Room"
                  colSpan="lg:col-span-2"
                />
                <RoomCard
                  imageUrl="luxury-room.jpg"
                  price="299"
                  roomType="Luxury Room"
                  colSpan="lg:col-span-3 xl:col-span-2"
                />
              </>
            )}
            {selectedButton === "Luxury" && (
              <RoomCard
                imageUrl="luxury-room.jpg"
                price="299"
                roomType="Luxury Room"
                colSpan="lg:col-span-2"
              />
            )}
            {selectedButton === "Single" && (
              <RoomCard
                imageUrl="single-room.jpg"
                price="149"
                roomType="Single Room"
                colSpan="lg:col-span-2"
              />
            )}
            {selectedButton === "Small Suite" && (
              <>
                <RoomCard
                  imageUrl="small-suite1.jpg"
                  price="159"
                  roomType="Small Suite"
                  colSpan="col-span-1"
                />
                <RoomCard
                  imageUrl="small-suite2.jpg"
                  price="199"
                  roomType="Small Suite+"
                  colSpan="lg:col-span-2"
                />
              </>
            )}
            {selectedButton === "Family" && (
              <RoomCard
                imageUrl="family-room.jpg"
                price="320"
                roomType="Family"
                colSpan="col-span-1"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;

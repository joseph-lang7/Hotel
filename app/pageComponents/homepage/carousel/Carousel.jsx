"use client";
import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviewCards = [
    <ReviewCard
      key={1}
      fullName="Lucy Martin"
      profession="Developer"
      src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600"
    />,
    <ReviewCard
      key={2}
      fullName="Linda Brooks"
      profession="Engineer"
      src="https://images.pexels.com/photos/3781538/pexels-photo-3781538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />,
    <ReviewCard
      key={3}
      fullName="Sarah Baker"
      profession="UX Designer"
      src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewCards.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [reviewCards.length]);

  return (
    <div>
      <div>{reviewCards[currentIndex]}</div>
    </div>
  );
};

export default Carousel;

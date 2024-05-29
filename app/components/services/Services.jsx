import React from "react";
import TextRightCard from "./TextRightCard";
import TextLeftCard from "./TextLeftCard";
const Services = () => {
  return (
    <div className="max-w-screen flex justify-center h-auto mt-2 px-5 pb-20">
      <div className="flex max-w-[450px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px]  2xl:max-w-[1400px] flex-col gap-10 2xl:gap-20 w-full">
        <TextRightCard
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photo of chef holding dishes"
          title="Restaurant"
          subtitle="Our Food"
        />
        <TextLeftCard
          src="https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg"
          alt="Photo of library"
          title="The Library"
          subtitle="Read Our Books"
        />
        <TextRightCard
          src="https://images.pexels.com/photos/703014/pexels-photo-703014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photo of person loading plates on barbell"
          title="Fitness Equipment"
          subtitle="Exercise equipment"
        />
        <TextLeftCard
          src="https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photo of pool"
          title="Large Pool"
          subtitle="Swimming Pool"
        />
      </div>
    </div>
  );
};

export default Services;

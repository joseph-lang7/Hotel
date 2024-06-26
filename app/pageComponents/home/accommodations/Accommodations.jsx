import React from "react";
import RectangleButton from "@/app/components/rectangle-button/RectangleButton";
const Accommodations = () => {
  return (
    <div className="max-w-screen flex justify-center h-auto py-20 px-5">
      <div className="flex max-w-[450px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px]  2xl:max-w-[1400px] flex-col lg:flex-row gap-5 w-full">
        {/* Text container */}
        <div className="w-full ">
          <div className=" flex flex-col gap-5 w-full">
            <p className="text-[#B89146] max-w-[400px]">Accommodations</p>
            <h4 className="text-3xl leading-[50px] max-w-[400px]">
              Welcome To Our Hotel And Resort
            </h4>
            <p className="max-w-[400px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam vel
              eaque tempora maxime deserunt et rerum ea consequatur debitis.
              Repudiandae.
            </p>
            <div className="my-5">
              <RectangleButton
                content="Read More"
                width="width-[200px]"
                href="/blog"
              />
            </div>
          </div>
        </div>
        {/* Image container */}
        <div className=" w-full max-w-[800px] h-[400px] md:h-[500px] relative">
          <div className="absolute bottom-0 w-full md:w-[500px] lg:w-full xl:w-[500px] h-auto md:h-[350px]">
            <img
              src="https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Bedroom"
            />
          </div>
          <div className="absolute top-0 right-0 h-[250px] w-[270px] md:w-[350px] md:h-[300px]">
            {" "}
            <img
              src="https://images.pexels.com/photos/21345931/pexels-photo-21345931/free-photo-of-vulcano.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Bedroom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;

import React from "react";
import Image from "next/image";
import Timer from "../timer/Timer";
const ReviewCard = ({ src, fullName, profession }) => {
  return (
    <div className="max-w-screen flex justify-center h-auto mt-2 px-5 pb-20">
      <div className="flex max-w-[450px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px]  2xl:max-w-[1400px] flex-row gap-10 2xl:gap-20 w-full bg-black h-auto text-white justify-center p-8 xl:p-14 relative">
        <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-5">
          <div className="w-[200px] h-[250px]">
            <Image
              src={src}
              alt="Profile picture of customer"
              width={100}
              height={100}
              className="object-cover w-full h-full rounded-full"
              unoptimized
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center lg:items-start max-w-[600px] gap-5">
              <div>
                <h5 className="text-2xl">{fullName}</h5>
                <p className="text-sm text-[#B89146]">{profession}</p>
              </div>
              <p className="text-center lg:text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                explicabo inventore laboriosam, accusamus dolorem quae quo enim?
                Reiciendis, mollitia? Nam!
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-5 right-5">
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

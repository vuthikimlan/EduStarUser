import React from "react";
import Image from "next/image";
import pic from "public/ctr_3 1.png";
function BannerVstep({ banner }) {
  return (
    <div className="grid bg-[#fff4e5] tablet:grid-cols-2 phone:grid-col-1 px-[10%] ">
      <div className="col-span-1 max-h-[500px] phone: tablet:block ">
        <div className="flex justify-end">
          <Image
            src={banner.image}
            alt="pic"
            width={600}
            height={410}
            // layout="fill"
            // objectFit="cover"
            // objectPosition="center"
            // className="flex-end object-cover "
          />
        </div>
      </div>
      <div className="col-span-1 ">
        <div className="bg-[#FFF4E5] tablet:py-[20rem] phone:py-[10rem] h-full ">
          <h2 className="pb-[5rem] block px-[10rem] font-[500] text-[8rem]">
            {banner.title}
          </h2>
          <p className="py-auto block px-[10rem] font-[400] text-[4rem]">
            {banner.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerVstep;

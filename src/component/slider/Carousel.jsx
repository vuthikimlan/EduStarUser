/* eslint-disable @next/next/no-img-element */

import { Carousel } from "antd";
import { getAllSlide } from "@/api/apiSlide";
//
async function Carousels(props) {
  const data = await getAllSlide();
  let banner = [];
  if (data) {
    banner = data?.data?.items.slice(0, 4);
  }

  return (
    <div>
      <Carousel autoplay>
        {banner?.map((item, index) => (
          <div
            className=" text-center bg-[#364d79] w-[100vw] h-[50vh]"
            key={index}
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover"
              height={100}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carousels;

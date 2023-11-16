import Carousels from "@/component/slider/Carousel";
import React from "react";
// import TableCourse from "./TableCourse";
import MyCourse from "./MyCourse/myCourse";
// const items = [
//   {
//     id: "/1.jpg",
//   },
//   {
//     id: "/2.jpg",
//   },
//   {
//     id: "/5.jpg",
//   },
//   {
//     id: "/6.jpg",
//   },
//   {
//     id: "/7.jpg",
//   },
//   {
//     id: "/8.jpg",
//   },
// ];

function PageMyCourse() {
  return (
    <div className="">
      <Carousels />

      <div className="mx-auto max-w-[1440w]">
        <div className="mt-[20rem] mb-[5rem] max-w-[1440px] mx-[10%]">
          <MyCourse />
          {/* <h2 className="my-[5%]">Khóa học của tôi </h2>
          <TableCourse /> */}
        </div>
      </div>
    </div>
  );
}

export default PageMyCourse;

"use client";
import { Button } from "antd";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext/AppContext";
import { getDataDisplay } from "@/api/apiDisplay";
import RegisterAccountModal from "../modal/RegisterAccountModal";

function BannerStudySchedule(props) {
  const { data, dispatch } = useContext(AppContext);
  const [banner, setBanner] = useState([]);
  const [background, setBackground] = useState([]);
  useEffect(() => {
    getDataDisplay()
      .then((data) => {
        setBanner(data?.data?.items[31]);
        setBackground(data?.data?.items[26]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const showModalConsulting = () => {
    dispatch({ type: "modalRegisterAccOpen" });
  };
  return (
    <>
      <div className="relative ">
        <div
          className=" grid grid-cols-5  text-white uppercase h-[54.4vh] "
          style={{
            backgroundImage: `url(${background.image})`,
            backgroundSize: "cover",
          }}
        >
          {/* <div className=" col-span-1 object-cover ">
            <Image src={banner.image} alt="pic" width={340} height={200} />
          </div> */}
          <div className="col-span-4 flex items-center text-center justify-center">
            <div className="mx-[10%] text-center">
              <h2 className="laptop:text-[10rem] phone:text-[7rem] ml-[20%] text-[#fff]  text-center leading-[10rem]">
                {banner.title}
              </h2>
              <p className="text-center w-4/5 line-clamp-3  ml-[20%] text-[#fff] my-[5%] font-[500px] text-[4.5rem]">
                {banner.description}
              </p>

              <Button
                className="custom-btn block ml-[50%]"
                onClick={() => {
                  showModalConsulting();
                }}
              >
                ĐĂNG KÝ TƯ VẤN
              </Button>
              <RegisterAccountModal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerStudySchedule;

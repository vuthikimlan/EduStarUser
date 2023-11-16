/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { getDataDisplay } from "@/api/apiDisplay";
import { AppContext } from "../AppContext/AppContext";
import RegisterAccountModal from "../modal/RegisterAccountModal";

function BannerTestSchedule(props) {
  const { data, dispatch } = useContext(AppContext);
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    getDataDisplay()
      .then((data) => {
        setBanner(data?.data?.items[30]);
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
      <div className="relative">
        <div className="w-[100vw] h-[60vh]">
          <img
            src={banner.image}
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="block-center w-[80%]">
            <h2 className="laptop:text-[10rem] phone:text-[7rem] text-[#fff]  text-center leading-[10rem]">
              {banner.title}
            </h2>
            <p className="text-center w-1/2 mx-auto line-clamp-3 text-[#fff] my-[5%] font-[500px] text-[4.5rem]">
              {banner.description}
            </p>

            <Button
              className="custom-btn block mx-auto"
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
    </>
  );
}

export default BannerTestSchedule;

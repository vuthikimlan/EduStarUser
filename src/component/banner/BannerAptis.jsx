/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "antd";
import { AppContext } from "../AppContext/AppContext";
function BannerAptis({ banner }) {
  const { data, dispatch } = useContext(AppContext);
  const showModalConsulting = () => {
    dispatch({ type: "modalRegisterAccOpen" });
  };
  return (
    <div className="bg-[#FFF4E5]">
      <div className="max-w-[1440px] mx-[auto]">
        <div className="grid tablet:grid-cols-2 items-center  tablet:mx-[10%] phone:grid-cols-1 phone:mx-0 ">
          <div className="col-span-1  justify-center phone:hidden  tablet:flex">
            <div className="after:absolute after:h-[30%] relative after:w-[20%] after:top-[-10px] after:left-[-10px] after:bg-[#FB9400] after:z-5  before:absolute before:h-[30%] before:w-[20%] before:bottom-[-10px] before:right-[-10px] before:bg-[#FB9400] before:z-5">
              <img
                src={banner.image}
                alt="pic"
                className="z-10 object-cover relative "
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="mx-[10%] my-[10%] ">
              <h2 className="uppercase text-[black]">{banner.title}</h2>
              <br />
              <p>{banner.description}</p>
              <div className="flex items-center">
                <Button
                  className="custom-btn mt-[10%] "
                  onClick={() => {
                    showModalConsulting();
                  }}
                >
                  ĐĂNG KÝ TƯ VẤN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerAptis;

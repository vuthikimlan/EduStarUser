"use client";
import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext/AppContext";
import { getDataDisplay } from "@/api/apiDisplay";
import RegisterAccountModal from "../modal/RegisterAccountModal";

function BannerVstepB1() {
  const { data, dispatch } = useContext(AppContext);
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    getDataDisplay()
      .then((data) => {
        setBanner(data?.data?.items[32]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const showModalConsulting = () => {
    dispatch({ type: "modalRegisterAccOpen" });
  };
  return (
    <div>
      <div className="w-[100vw] h-[50vh] relative">
        <img src={banner.image} alt="" className="w-full h-full object-cover" />
        <div className="w-[60vw] bg-[#fff4e5d6] h-full block block-center opa">
          <h2 className="text-[9rem] text-[#000000] font-[500] text-center mt-[10%] mb-[5%]">
            {banner.title}
          </h2>
          <p className="text-[4rem] font-[400] text-[#000000] line-clamp-4 h-[110px] px-[20%] text-center">
            {banner.description}
          </p>
          <Button
            className="custom-btn mx-auto block mt-[5rem] uppercase"
            onClick={() => {
              showModalConsulting();
            }}
          >
            Đăng ký tư vấn
          </Button>
          <RegisterAccountModal />
        </div>
      </div>
    </div>
  );
}

export default BannerVstepB1;

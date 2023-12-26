/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import React from "react";
import { verifyEmail } from "../../../../../api/registerAuthen";

async function RegisterSuccess(request) {
  const params = request?.searchParams["email-verification"];

  const getIsVerified = async function getData() {
    const res = await verifyEmail(params);
    if (res?.data?.success) {
      return res?.data?.success;
    } else if (res?.data?.statusCode === 500) {
      return res?.data?.success;
    }
  };

  const isVerified = await getIsVerified();

  return (
    <div>
      <div className="text-center my-[40rem] mx-[80rem] p-[29rem] bg-[cornsilk] rounded-[20px] border-[1px] border-solid border-transparent ">
        <h2>
          {isVerified
            ? "Bạn đã xác thực email đăng ký thành công tại Edustar"
            : "Xác thực thất bại"}
        </h2>
        <div className="mt-[30px]">
          <Link
            className="bg-[#FB9400] hover:opacity-80 px-[5rem] border-solid	rounded-[2rem] text-white py-[6px] "
            href="/"
          >
            Quay lại trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterSuccess;

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, Form, Input, Modal, message, notification } from "antd";
import React, { useContext, useEffect, useState } from "react";
import "./Css.css";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  RightSquareOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useForm } from "antd/lib/form/Form";
import { registerAuthen } from "@/api/registerAuthen";
import Image from "next/image";
import popup3 from "public/popup3.png";
import popup5 from "public/popup5.png";

function PopUp(props) {
  const [isPopUp, setIsPopUp] = useState(false);
  const [form] = useForm();

  const timeout = setTimeout(() => {
    setIsPopUp(true);
  }, 100000);

  // clearTimeout(timeout);

  const onFinish = async (values) => {
    registerAuthen(values).then((res) => {
      if (res?.data?.success) {
        notification.open({
          message: "Đăng ký thành công",
          description: "Vui lòng kiểm tra email để xác thực",
          placement: "top",
        });

        form.resetFields();
      } else if (res?.data?.error?.statusCode === 500) {
        message.error(res?.data?.error?.message);
        form.resetFields();
      } else if (res?.data?.error?.statusCode === 2) {
        {
          res?.data?.error?.errorDetailList.map((e) =>
            message.error(e.message)
          );
        }
        form.resetFields();
      }
    });
  };

  return (
    <div>
      <Modal
        open={isPopUp}
        onCancel={() => {
          setIsPopUp(false);
          console.log("hủy");
        }}
        width={800}
        footer={[]}
      >
        <div className="flex h-[106rem] ">
          <div className=" mt-[10px] ">
            <div className="flex">
              <img
                src="/logoCamTrongSuot.png"
                alt=""
                className=" w-[50rem] relative top-[-15rem] left-[-10rem] "
              />
              <h2 className="text-[50px] font-normal text-[#fb9400] relative right-[26rem] top-[25px] ">
                EduStar
              </h2>
            </div>
            <p className=" text-[#fb9400] text-[30px] relative bottom-[26rem] left-[23px] ">
              Make English become your power
            </p>
            <div className="relative bottom-[18rem] ml-[18px] ">
              <h1 className="text-[6rem] mb-[15px] ">Đăng ký ngay để: </h1>
              <div className="flex mb-[10px] ">
                <RightSquareOutlined className="text-[#F69050] mr-[5px] " />

                <p>Nhận thêm tài liệu</p>
              </div>
              <div className="flex mb-[10px] ">
                <RightSquareOutlined className="text-[#F69050] mr-[5px] " />

                <p>Nhận thêm nhiều bài thi thử</p>
              </div>
            </div>
            {/* Nhận thêm tài liệu và các bài thi thử
             */}
            <Image
              src={popup3}
              height={289}
              width={157}
              className=" w-[289px]  m-[0] relative left-[16px] bottom-[110px] "
            />

            {/* <p>Nhanh tay đăng ký để nhận được những ưu đãi sớm nhất từ EduStar</p> */}
          </div>
          <div className="w-[50%] ml-[20rem] ">
            <Form
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              form={form}
            >
              <h1 className=" font-bold text-7xl text-center mb-[20px] text-[#FB9400] mt-[11px] uppercase ">
                Đăng ký ngay bây giờ
              </h1>
              <Form.Item
                name="name"
                rules={[
                  { required: true, message: "Vui lòng nhập họ và tên!" },
                  { type: "text", message: "Vui lòng nhập họ và tên!" },
                ]}
              >
                <Input
                  className="h-[10rem]"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Họ và tên"
                />
              </Form.Item>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Vui lòng nhập tên tài khoản!" },
                  { type: "text", message: "Vui lòng nhập tên tài khoản!" },
                ]}
              >
                <Input
                  className="h-[10rem]"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Tên tài khoản"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
              >
                <Input.Password
                  className="h-[10rem]"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  // type="password"
                  placeholder="Mật khẩu"
                />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại!" },
                ]}
              >
                <Input
                  className="h-[10rem]"
                  prefix={<PhoneOutlined className="site-form-item-icon" />}
                  placeholder="Số điện thoại"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Vui lòng nhập email!" },
                  { type: "email", message: "Email không hợp lệ!" },
                ]}
              >
                <Input
                  className="h-[10rem]"
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item className="flex justify-end ">
                <Button
                  type="primary"
                  htmlType="submit"
                  className=" bg-[#FB9400] w-[94rem] "
                >
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
            <Image
              src={popup5}
              // src={popup1}
              alt="icon"
              height={140}
              width={157}
              className=" relative bottom-[61rem] left-[92rem] "
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PopUp;

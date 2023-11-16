"use client";
import { AppContext } from "../AppContext/AppContext";
import React, { useState, useContext, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { useRouter } from "next/navigation";
import RegisterAccountModal from "../modal/RegisterAccountModal";
import Cookies from "js-cookie";
import Link from "next/link";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const MenuHeader = () => {
  const router = useRouter();

  const [jwt, setJwt] = useState(null);
  const [id, setId] = useState(null);

  const { data, dispatch } = useContext(AppContext);
  const showModalRegisterAcc = () => {
    dispatch({ type: "modalRegisterAccOpen" });
  };

  const items = [
    {
      label: "TRANG CHỦ",
      key: "1",
      onClick: () => {
        router.push("/");
      },
    },
    {
      label: "CHƯƠNG TRÌNH ĐÀO TẠO ANH NGỮ",
      // key: "user",
      children: [
        {
          label: "Luyện thi TOEIC",
          key: "3",
          onClick: () => {
            router.push("/toeic");
          },
        },
        {
          label: "Luyện thi IELTS",
          key: "4",
          onClick: () => {
            router.push("/ielts");
          },
        },
        {
          label: "Luyện thi APTIS",
          key: "5",
          // onClick: () => {
          //   router.push("/aptis");
          // },
          children: [
            {
              label: "Luyện thi APTIS B1",
              key: "6",
              onClick: () => {
                router.push("/aptis/luyen-thi-b1");
              },
            },
            {
              label: "Luyện thi APTIS B2",
              key: "7",
              onClick: () => {
                router.push("/aptis/luyen-thi-b2");
              },
            },
          ],
        },
        {
          label: "Luyện thi VSTEP",
          key: "8",
          // onClick: () => {
          //   router.push("/vstep");
          // },
          children: [
            {
              label: "Luyện thi VSTEP B1",
              key: "9",
              onClick: () => {
                router.push("/vstep/luyen-thi-b1");
              },
            },
            {
              label: "Luyện thi VSTEP B2",
              key: "10",
              onClick: () => {
                router.push("/vstep/luyen-thi-b2");
              },
            },
          ],
        },
        {
          label: "Anh Ngữ Học Thuật",
          key: "11",
          onClick: () => {
            router.push("/englishacademic");
          },
        },
      ],
    },
    {
      label: "LỊCH THI",
      key: "12",
      onClick: () => {
        router.push("/test-schedule");
      },
    },
    {
      label: "LỊCH ÔN TẬP",
      key: "13",
      onClick: () => {
        router.push("/study-schedule");
      },
    },
    {
      label: "TIN TỨC",
      key: "14",
      onClick: () => {
        router.push("/new");
      },
    },
    {
      label: (
        <Link href={`https://etestuser-4ec97.web.app/?jwt=${jwt}&id=${id}`}>
          THI THỬ{" "}
        </Link>
      ),
      key: "15",
      // onClick: () => {
      //   router.push("englishacademic");
      // },
    },
    {
      label: "ĐĂNG KÝ TƯ VẤN",
      key: "sub6",
    },
  ];
  useEffect(() => {
    setJwt(Cookies.get("jwt"));
    setId(Cookies.get("id"));
  }, []);

  return (
    <>
      <Menu
        onClick={(e) => {
          if (e.key == "sub6") {
            showModalRegisterAcc();
          }
        }}
        className="font-[500] items-center w-[70vw] phone:hidden tablet:hidden desktop:flex laptop:hidden  "
        mode="horizontal"
        items={items}
      ></Menu>
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
        className="block phone:block tablet:block phone:absolute phone:left-[20px] phone:bottom-[13px] desktop:hidden  "
      >
        <MenuOutlined className="" onClick={(e) => e.preventDefault()} />
      </Dropdown>
      <RegisterAccountModal />
    </>
  );
};

export default MenuHeader;

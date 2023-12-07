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
      label: (
        <Link href={`http://localhost:3001/?jwt=${Cookies.get("jwt")}&id=${Cookies.get("id")}`}>
        {/* <Link
          href={`http://localhost:3001/?jwt=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJEb2NoaWVuaHAyMDAyIiwiWEFVVEhPUiI6IkNVU1RPTUVSIiwiaWF0IjoxNzAxNTg5MDQ4LCJleHAiOjE3MDE2MjUwNDh9.ZTk9EIKz3fwjL_O-8njHmuQfm_qOhVQk85k5K73LehURtI3x_3uYD5nYAp1mdELN4vJ99Tahs3M5IYq9Tcyi-Q&id=246`}
        > */}
          THI THỬ{" "}
        </Link>

       
      ),
      key: "2",
    },
    {
      label: "KHÓA HỌC",
      children: [
        {
          label: <Link href="/vstep">Luyện thi VSTEP</Link>,
          key: "3",
          children: [
            {
              label: "Luyện thi VSTEP B1",
              key: "4",
              onClick: () => {
                router.push("/vstep/luyen-thi-b1");
              },
            },
            {
              label: "Luyện thi VSTEP B2",
              key: "5",
              onClick: () => {
                router.push("/vstep/luyen-thi-b2");
              },
            },
          ],
        },
        {
          label: "Luyện thi TOEIC",
          key: "6",
          onClick: () => {
            router.push("/toeic");
          },
        },
        {
          label: "Luyện thi IELTS",
          key: "7",
          onClick: () => {
            router.push("/ielts");
          },
        },
        {
          label: <Link href="/aptis">Luyện thi APTIS</Link>,
          key: "8",
          children: [
            {
              label: "Luyện thi APTIS B1",
              key: "9",
              onClick: () => {
                router.push("/aptis/luyen-thi-b1");
              },
            },
            {
              label: "Luyện thi APTIS B2",
              key: "10",
              onClick: () => {
                router.push("/aptis/luyen-thi-b2");
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
      label: "LỊCH THI VSTEP",
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
      label: "ĐĂNG KÝ TƯ VẤN",
      key: "sub6",
    },
  ];
  useEffect(() => {
    setJwt(Cookies.get("jwt"));
    setId(Cookies.get("id"));
    console.log(jwt , id);
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

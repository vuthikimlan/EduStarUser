import { message } from "antd";
import axios from "./axios";


export const getAllDocument = async (params) => {
  const response = await fetch('https://api.edustar.com.vn/document/all', {
      method: "GET",
      headers:{
        'ngrok-skip-browser-warning': '1'
      }
    }); 
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  
};

export const downloadDocument = async (params) => {
  try {
    const res = await axios.get(`/file/?filename=${params}`);
    const { data, success, error } = res?.data;
    if (success) {
      return {
        data: data || [],
      };
    } else {
      message.error(error || "Lỗi không lấy được dữ liệu");
    }
  } catch (error) {}
};

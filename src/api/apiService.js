import { message } from "antd";
// import axiosServer from "./axios";
import axios from "./axios";


export const getAllService = async (params) => {
  const response = await fetch('https://api.edustar.com.vn/service/all', {
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
export const getServiceById = async (id) => {
  const response = await fetch(`https://api.edustar.com.vn/service/${id}`, {
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

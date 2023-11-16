import { message } from "antd";
import axios from "./axios";


export const getAllNews = async (params) => {
  
  const response = await fetch('https://api.edustar.com.vn/news/all', {
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
export const getNewsById = async (id) => {
  const response = await fetch(`https://api.edustar.com.vn/news/${id}`, {
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

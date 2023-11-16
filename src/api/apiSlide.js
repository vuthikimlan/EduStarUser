import { message } from "antd";
import axios from "./axios";


export const getAllSlide = async () => {

  const response = await fetch('https://api.edustar.com.vn/slide/all', {
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

export const getSlideById = async (id) => {
  const response = await fetch(`https://api.edustar.com.vn/slide/${id}`, {
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
import { message } from "antd";
import axios from "./axios";


export const getAllSlide = async () => {

  const response = await fetch('https://service.edustar.com.vn/slide/all'); 
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
};

export const getSlideById = async (id) => {
  const response = await fetch(`https://service.edustar.com.vn/slide/${id}`); 
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
  
};
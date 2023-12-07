import { message } from "antd";
import axios from "./axios";


export const getAllExamSchedule = async (params) => {
  const response = await fetch('https://service.edustar.com.vn/exam/schedule/all'); 
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
 
};

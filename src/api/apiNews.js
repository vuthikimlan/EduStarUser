
export const getAllNews = async (params) => {
  
  const response = await fetch('https://service.edustar.com.vn/news/all'); 
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
};
export const getNewsById = async (id) => {
  const response = await fetch(`https://service.edustar.com.vn/news/${id}`); 
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  
};

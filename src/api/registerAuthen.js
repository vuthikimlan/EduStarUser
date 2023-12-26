// import axiosServer from "./axios";
import axios from "./axios";


export const registerAuthen = (values) =>{
    const register = {
        name: values?.name,
        username: values?.username,
        password: values?.password,
        phone: values?.phone,
        email: values?.email,
        link: "https://edustar.com.vn/users/auth/verify"
    }
    return axios.post("/user/auth/register", register)
}

export const verifyEmail = ( params) => {
    return axios.get(`/user/auth/verify?email-verification=${params}`)
}
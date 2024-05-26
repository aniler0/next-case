import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("userToken");
  config.headers.Authorization = "Bearer " + token;

  return config;
});

export default axiosInstance;
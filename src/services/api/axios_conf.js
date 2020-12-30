import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://api.ytt.coelix.online/api",
  responseType: "json",
});

export default axiosInstance;

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.chat.coelix.online/api",
  responseType: "json",
});

let access_token = window.localStorage.TOKEN;
axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

export default axiosInstance;

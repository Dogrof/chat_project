import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  responseType: "json",
});

let access_token = window.localStorage.TOKEN;
axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

export default axiosInstance;

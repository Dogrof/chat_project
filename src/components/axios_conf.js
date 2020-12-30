import axios from "axios";

export default axios.create({
  baseURL: "http://api.ytt.coelix.online/api",
  responseType: "json",
  headers: {
      'Authorization' : `Bearer ${window.localStorage.TOKEN}`
  }
});

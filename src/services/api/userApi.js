import axios from "../api/axios_conf";

const userApi = {
  login: ({ mail, pass }) => {
    return axios
      .post("/auth/login", { email: mail, password: pass })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getUser: () => {
    return axios
      .get("/user")
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getCurrentDialog: () => {
    return axios
      .get("/user/dialog")
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default userApi;

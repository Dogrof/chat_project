import axios from "../api/axios_conf";

const userApi = {
  login: ({ mail, pass }) => {
    return axios
      .post("/auth/login", { login: mail, password: pass })
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
  setChatInfo: (id) => {
    return axios
    axios.post('/client/chat/join', {type:id}).then(data => {


      return data;
      //
    }).catch(err =>{
      console.log("Response error");
    })
  },
};

export default userApi;

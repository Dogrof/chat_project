import axios from '../api/axios_conf';

const userApi = {
  login: () => {
    return axios
      .post('/auth/login', { login: mail, password: pass })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default userApi;

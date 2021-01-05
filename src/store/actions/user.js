import userApi from "../../services/api/userApi";
import axios from "../../services/api/axios_conf";
// import {browserHistory} from 'react-router'

const setUser = (data) => ({
  type: "SET_USER",
  payload: data,
});

const setUserCurrentDialog = (data) => ({
  type: "SET_USER_CURRENT_DIALOG",
  payload: data,
});

export const loginAction = (credentials) => (dispatch) => {
  return userApi
    .login(credentials)
    .then(({ data }) => {
      const { access_token } = data;
      window.localStorage.TOKEN = access_token;
      axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
    })
    .then(() => {
      userApi.getUser().then((data) => {
        dispatch(setUser(data));
      });
    })
    .then(() => {
      userApi.setChatInfo().then((data) => {
        if (data) {
          //browserHistory.push('/chat')
        }else{
          //browserHistory.push('/join')
        }
      });
    });
};

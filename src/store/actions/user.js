import userApi from '../../services/api/userApi';
import axios from '../../services/api/axios_conf';
import { socketInit } from './socket.js';

export const setUser = (data) => ({
  type: 'SET_USER',
  payload: data,
});

export const loginAction = (credentials) => (dispatch) => {
  return userApi
    .login(credentials)
    .then(({ data }) => {
      const { access_token } = data;
      window.localStorage.TOKEN = access_token;
      axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    })
    .then(() => {
      userApi.getUser().then((data) => {
        dispatch(setUser(data));
        dispatch(socketInit());
      });
    });
};

export const logoutAction = () => ({
  type: 'LOGOUT',
  payload: null,
});

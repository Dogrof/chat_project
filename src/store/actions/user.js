import userApi from '../../services/api/userApi';
import axios from '../../services/api/axios_conf';
import socketInit from './socket-init.js';
import browserHistory from 'history/createBrowserHistory';

const setUser = (data) => ({
  type: 'SET_USER',
  payload: data,
});

export const loginAction = (credentials) => (dispatch) => {
  return userApi
    .login(credentials)
    .then(({ data }) => {
      console.log(data);
      const { access_token } = data;
      window.localStorage.TOKEN = access_token;
      axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    })
    .then(() => {
      userApi.getUser().then((data) => {
        console.log(data);
        dispatch(setUser(data));
        dispatch(socketInit());
      });
    })
    .then(() => {
      userApi.setChatInfo().then((data) => {
        if (data) {
          // browserHistory.push('/chat');
        } else {
          // browserHistory.push('/join');
        }
      });
    });
};

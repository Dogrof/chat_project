import axios from '../../services/api/axios_conf';

const initialState = {
  data: null,
  isAuth: !!window.localStorage.TOKEN,
};

const user = function (state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_USER':
      return {
        data: payload,
        isAuth: true,
      };
    case 'LOGOUT':
      console.log(123);
      if (window.localStorage.TOKEN) {
        delete window.localStorage.TOKEN;
      }
      if (axios.defaults.headers.common['Authorization']) {
        axios.defaults.headers.common['Authorization'] = null;
      }
      return {
        data: null,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default user;

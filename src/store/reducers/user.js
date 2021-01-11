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
    default:
      return state;
  }
};

export default user;

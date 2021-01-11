const initialState = {
  io: null,
};

const socket = function (state = initialState, { type, payload }) {
  switch (type) {
    case 'INIT_SOCKET':
      console.log(123);
    return {
        io: payload,
      };

    default:
      return state;
  }
};

export default socket;

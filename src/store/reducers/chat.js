const initialState = {
  data: {},
};

const chat = function (state = initialState, { type, payload }) {
  switch (type) {
    case "SET_CHAT_INFO":
      return {
        data: payload,
      };
    default:
      return state;
  }
};

export default chat;

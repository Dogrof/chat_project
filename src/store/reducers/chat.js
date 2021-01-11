const initialState = {
  data: null,
};

const chat = function (state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_CHAT_INFO':
      return {
        data: payload,
      };
    case 'ADD_NEW_MESSAGE':
      return {
        data: {
          ...state.data,
          messages: [...state.data.messages, payload],
        },
      };
    default:
      return state;
  }
};

export default chat;

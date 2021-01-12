const initialState = {
  data: null,
  currentChatId: null,
};

const chat = function (state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_CHAT_INFO':
      return {
        ...state,
        data: payload,
      };
    case 'ADD_NEW_MESSAGE':
      return {
        ...state,
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

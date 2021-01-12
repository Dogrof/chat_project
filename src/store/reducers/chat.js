const initialState = {
  data: null,
  currentChat: null,
  currentChatId: null,
};

const chat = function (state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_CHAT_INFO':
      return {
        ...state,
        data: payload,
      };
    case 'SET_CURRENT_CHAT_ID':
      return {
        ...state,
        currentChatId: payload,
      };
    case 'SET_CURRENT_CHAT':
      return {
        ...state,
        currentChat: payload,
      };

    case 'ADD_NEW_MESSAGE':
      return {
        ...state,
        currentChat: {
          ...state.currentChat,
          messages: [...state.currentChat.messages, payload],
        },
      };
    default:
      return state;
  }
};

export default chat;

import chatApi from '../../services/api/chatApi';

const setChatInfo = (data) => ({
  type: 'SET_CHAT_INFO',
  payload: data,
});

const addMessage = (msg) => ({
  type: 'ADD_NEW_MESSAGE',
  payload: msg,
});

const getChatInfo = (id) => async (dispatch) => {
  const data = await chatApi.getChat(id);
  dispatch(setChatInfo(data.data));
};

export { setChatInfo, getChatInfo, addMessage };

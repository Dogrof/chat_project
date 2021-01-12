import chatApi from '../../services/api/chatApi';

const setChatInfo = (data) => ({
  type: 'SET_CHAT_INFO',
  payload: data,
});

const addMessage = (msg) => ({
  type: 'ADD_NEW_MESSAGE',
  payload: msg,
});

const joinChat = (id) => async (dispatch) => {
  const data = await chatApi.joinChat(id);
  dispatch(setChatInfo(data.data));
  return data;
};

const getAdminChatInfo = () => async (dispatch) => {
  const data = await chatApi.getAdminChat();
  dispatch(setChatInfo(data.data));
  return data;
};

const getChatInfo = () => async (dispatch) => {
  const data = await chatApi.getChat();
  dispatch(setChatInfo(data.data));
  return data;
};

export { setChatInfo, getChatInfo, joinChat, addMessage, getAdminChatInfo };

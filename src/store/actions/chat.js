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
  console.log(data);
  dispatch(setChatInfo(data.data));
  return data;
};

const getChatInfo = () => async (dispatch) => {
  const data = await chatApi.getChat();
  dispatch(setCurrentChat(data.data));
  return data;
};

const setCurrentChatId = (id) => ({
  type: 'SET_CURRENT_CHAT_ID',
  payload: id,
});

const setCurrentChat = (data) => ({
  type: 'SET_CURRENT_CHAT',
  payload: data,
});

const getCurrentChatAction = (id) => async (dispatch) => {
  const data = await chatApi.getMessages(id);
  dispatch(setCurrentChat(data.data));
};

export {
  setChatInfo,
  getChatInfo,
  joinChat,
  addMessage,
  getAdminChatInfo,
  setCurrentChatId,
  getCurrentChatAction,
};

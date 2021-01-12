import axios from '../api/axios_conf';
const chatApi = {
  joinChat: async (id) => {
    try {
      const data = await axios.post('/client/chat/join', { type: id });
      return data;
    } catch (error) {
      console.log('Response error', error);
    }
  },
  getChat: async () => {
    try {
      const data = await axios.get('/client/chat');
      return data;
    } catch (error) {
      console.log('Response error', error);
    }
  },
  getAdminChat: async () => {
    try {
      const data = await axios.get('/admin/chat');
      return data;
    } catch (error) {
      console.log('Response error', error);
    }
  },
  getMessages: async (id) => {
    try {
      const data = await axios.get(`/admin/chat/${id}`);
      return data;
    } catch (error) {
      console.log('Response error', error);
    }
  },
};

export default chatApi;

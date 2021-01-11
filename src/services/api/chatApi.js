import axios from '../api/axios_conf';
const chatApi = {
  getChat: async (id) => {
    try {
      const data = await axios.post('/client/chat/join', { type: id });
      return data;
    } catch (error) {
      throw new Error('Response error', error);
    }
  },
};

export default chatApi;

const io = require('socket.io-client');

let access_token = window.localStorage.TOKEN;

const socketInit = () => ({
  type: 'INIT_SOCKET',
  payload: io('https://api.chat.coelix.online', {
    auth: {
      token: `Bearer ${access_token}`,
      //(context) => { return (context.rootState.Auth.token || "no token"); }
    },
  }),
});

export { socketInit };

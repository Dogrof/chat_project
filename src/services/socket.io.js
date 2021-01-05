const io = require("socket.io-client");

let access_token = window.localStorage.TOKEN;
const socket = io('http://localhost:8080', {
                auth: {
                    token:  Bearer ${access_token}
                        //(context) => { return (context.rootState.Auth.token || "no token"); }
                };

export default socket;

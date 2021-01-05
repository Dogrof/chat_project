import socket from "../../services/socket.io.js";

const socketInit = () => ({
  type: "INIT_SOCKET",
  payload: socket,
});

export default socketInit;

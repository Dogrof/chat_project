import React from "react";
import Topbar from "./Topbar";
import MessagesList from "./MessagesList";
import ChatInput from "./ChatInput";
const MessagesHistory = () => {
  return (
    <div className="messages__history">
      <Topbar />
      <MessagesList />
      <ChatInput />
    </div>
  );
};

export default MessagesHistory;

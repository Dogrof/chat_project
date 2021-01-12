import React from 'react';
import Topbar from './Topbar';
import MessagesList from './MessagesList';
import ChatInput from './ChatInput';
import { useSelector } from 'react-redux';
const MessagesHistory = ({ socket }) => {
  const { chat, currentChat } = useSelector(({ chat }) => ({
    chat: chat.data,
    currentChat: chat.currentChatId,
  }));

  return (
    <div className='messages__history'>
      <Topbar />
      {currentChat ? (
        <MessagesList messages={chat?.messages} />
      ) : (
        <div className='messages__empty'></div>
      )}
      <ChatInput chat={chat} socket={socket} />
    </div>
  );
};

export default MessagesHistory;

import React from 'react';
import Topbar from './Topbar';
import MessagesList from './MessagesList';
import ChatInput from './ChatInput';
import { useDispatch, useSelector } from 'react-redux';
const MessagesHistory = () => {
  const { chat } = useSelector(({ chat }) => ({
    chat: chat.data,
  }));

  return (
    <div className='messages__history'>
      <Topbar />
      <MessagesList messages={chat?.messages} />
      <ChatInput chat={chat} />
    </div>
  );
};

export default MessagesHistory;

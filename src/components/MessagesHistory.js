import React, { useMemo } from 'react';
import Topbar from './Topbar';
import MessagesList from './MessagesList';
import ChatInput from './ChatInput';

const MessagesHistory = ({
  socket,
  chat,
  userRole,
  currentChat,
  currentChatId,
}) => {
  return (
    <div className='messages__history'>
      <Topbar chat={currentChat} />

      {currentChat ? (
        <>
          <MessagesList messages={currentChat?.messages} />
          <ChatInput chat={currentChat} socket={socket} userRole={userRole} />
        </>
      ) : (
        <div className='messages__empty'></div>
      )}
    </div>
  );
};

export default MessagesHistory;

import React from 'react';
import Sidebar from './Sidebar';
import MessagesHistory from './MessagesHistory';
import DialogsList from './DialogsList';

const Chat = () => {
  return (
    <div className='chat'>
      <Sidebar />
      <MessagesHistory />
      <div className='chat__dialogs'>
        <DialogsList />
      </div>
    
    </div>
  );
};

export default Chat;

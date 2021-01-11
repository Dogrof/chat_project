import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getChatInfo} from '../store/actions/chat'
import Sidebar from './Sidebar';
import MessagesHistory from './MessagesHistory';
import DialogsList from './DialogsList';

const Chat = () => {
  const { chat } = useSelector(({ chat }) => ({
    chat: chat.data,
  }));
  useEffect(() => {
    getChatInfo()
  }, [chat]);
  return (
    <div className='chat'>
      <Sidebar />
      <MessagesHistory />
      <div className='chat__dialogs'>
        <DialogsList members={chat?.members || []} />
      </div>
    </div>
  );
};

export default Chat;

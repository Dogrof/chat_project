import React, { useEffect } from 'react';
import axios from '../services/api/axios_conf';
import Sidebar from './Sidebar';
import MessagesHistory from './MessagesHistory';
import DialogsList from './DialogsList';
import { useDispatch, useSelector } from 'react-redux';
const Chat = () => {
  const { chat } = useSelector(({ chat }) => ({
    chat: chat.data,
  }));
  useEffect(() => {
    // axios.get('/client/chat').then((data) => {
    //   console.log(data);
    // });
  }, []);
  return (
    <div className='chat'>
      {console.log(chat)}
      <Sidebar />
      <MessagesHistory />
      <div className='chat__dialogs'>
        <DialogsList members={chat.data.members || []} />
      </div>
    </div>
  );
};

export default Chat;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChatInfo } from '../store/actions/chat';
import { setUser } from '../store/actions/user';
import userApi from '../services/api/userApi';
import { socketInit } from '../store/actions/socket';
import Sidebar from './Sidebar';
import MessagesHistory from './MessagesHistory';
import DialogsList from './DialogsList';

const Chat = () => {
  const dispatch = useDispatch();
  const { chat, socket, user } = useSelector(({ chat, socket, user }) => ({
    chat: chat.data,
    socket: socket.io,
    user: user.data,
  }));
  useEffect(() => {
    if (!chat) {
      dispatch(getChatInfo());
    }

    if (!user) {
      userApi.getUser().then((data) => {
        console.log(123);
        dispatch(setUser(data));
        dispatch(socketInit());
      });
    }
  }, [chat, user]);
  return (
    <div className='chat'>
      <Sidebar />
      <MessagesHistory socket={socket} />
      <div className='chat__dialogs'>
        <DialogsList members={chat?.members || []} />
      </div>
    </div>
  );
};

export default Chat;

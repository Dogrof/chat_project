import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChatInfo, getAdminChatInfo } from '../store/actions/chat';
import { setUser } from '../store/actions/user';
import userApi from '../services/api/userApi';
import { socketInit } from '../store/actions/socket';
import Sidebar from './Sidebar';
import MessagesHistory from './MessagesHistory';
import DialogsList from './ChatsList';

const Chat = () => {
  const dispatch = useDispatch();
  const { currentChat, chat, socket, user } = useSelector(
    ({ chat, socket, user }) => ({
      chat: chat.data,
      currentChat: chat.currentChatId,
      socket: socket.io,
      user: user.data,
    })
  );

  useEffect(() => {
    if (!user) {
      userApi.getUser().then((data) => {
        dispatch(setUser(data));
        dispatch(socketInit());
      });
    }
  }, [user, user, dispatch]);

  useEffect(() => {
    let data;
    if (!chat) {
      if (user?.role.name === 'Admin') {
        data = dispatch(getAdminChatInfo());
      }
      if (user?.role.name === 'Client') {
        data = dispatch(getChatInfo());
      }
    }
  }, [chat, user, dispatch]);

  return (
    <div className='chat'>
      <Sidebar />
      {currentChat ? (
        <MessagesHistory socket={socket} />
      ) : (
        <div className='messages__empty'>Choose chat to start messaging</div>
      )}

      <div className='chat__dialogs'>
        <DialogsList members={chat?.members || []} />
      </div>
    </div>
  );
};

export default memo(Chat);

import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import {
  getChatInfo,
  getAdminChatInfo,
  setCurrentChatId,
} from '../store/actions/chat';
import { setUser } from '../store/actions/user';
import userApi from '../services/api/userApi';
import { socketInit } from '../store/actions/socket';
import Sidebar from './Sidebar';
import MessagesHistory from './MessagesHistory';
import ChatsList from './ChatsList';
import MembersList from './MembersList';

const Chat = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {
    currentChatId,
    currentChat,
    chat,
    socket,
    user,
    userRole,
  } = useSelector(({ chat, socket, user }) => ({
    chat: chat.data,
    currentChat: chat.currentChat,
    currentChatId: chat.currentChatId,
    socket: socket.io,
    user: user.data,
    userRole: user.data?.role?.name,
  }));

  useEffect(() => {
    if (location.pathname.split('/')[1] === 'chat') {
      dispatch(setCurrentChatId(location.pathname.split('/').pop()));
    } else {
      dispatch(setCurrentChatId(''));
    }
  }, [location, dispatch]);

  useEffect(() => {
    if (!user) {
      userApi.getUser().then((data) => {
        dispatch(setUser(data));
        dispatch(socketInit());
      });
    }
  }, [user, dispatch]);

  useEffect(() => {
    let data;
    if (!chat) {
      if (userRole === 'Admin') {
        data = dispatch(getAdminChatInfo());
      }
      if (userRole === 'Client') {
        data = dispatch(getChatInfo());
      }
    }
  }, [chat, userRole, dispatch]);

  return (
    <div className='chat'>
      <Sidebar />
      {currentChatId ? (
        <MessagesHistory
          socket={socket}
          chat={chat}
          currentChat={currentChat}
          currentChatId={currentChatId}
          userRole={userRole}
        />
      ) : (
        <div className='messages__empty'>Choose chat to start messaging</div>
      )}

      <div className='chat__dialogs'>
        {userRole === 'Admin' && (
          <ChatsList chats={chat} currentChatId={currentChatId} />
        )}
        {userRole === 'Client' && (
          <MembersList members={currentChat?.members} />
        )}
      </div>
    </div>
  );
};

export default memo(Chat);

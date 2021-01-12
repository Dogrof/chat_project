import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../store/actions/chat';
import axios from '../services/api/axios_conf';
const ChatInput = ({ chat, socket, userRole }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleAddMessage = useCallback(
    (msg) => {
      console.log(chat._id, msg.chat_id);
      if (chat._id === msg.chat_id) {
        console.log(chat._id === msg.chat_id);
        dispatch(addMessage(msg));
      }
    },
    [chat._id, dispatch]
  );

  useEffect(() => {
    socket?.on('MESSAGE', handleAddMessage);
    return () => {
      socket.removeEventListener('MESSAGE', handleAddMessage);
    };
  }, [socket, dispatch, handleAddMessage]);
  const onTextareaChange = (e) => {
    setValue(e.target.value);
  };
  const onKeyPressed = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (userRole === 'Admin') {
        axios.post(`/admin/chat/${chat._id}`, { text: value });
      }
      if (userRole === 'Client') {
        axios.post(`/client/chat/${chat._id}`, { text: value });
      }
      setValue('');
    }
  };

  return (
    <div className='chat-input'>
      <textarea
        value={value}
        onChange={onTextareaChange}
        onKeyDown={onKeyPressed}
        placeholder='Type a message...'
      />
      <button>Type</button>
    </div>
  );
};

export default ChatInput;

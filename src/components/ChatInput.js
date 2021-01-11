import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../store/actions/chat';
import axios from '../services/api/axios_conf';
const ChatInput = ({ chat, socket }) => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    socket?.on('MESSAGE', (msg) => {
      console.log('NEW MESSAGE');
      dispatch(addMessage(msg));
    });
    return () => {
      // socket.close();
    };
  }, [socket]);
  const onTextareaChange = (e) => {
    setValue(e.target.value);
  };
  const onKeyPressed = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      axios.post(`/client/chat/${chat._id}`, { text: value });
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

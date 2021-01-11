import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/actions/chat';
import axios from '../services/api/axios_conf';
const ChatInput = ({ chat }) => {
  const [value, setValue] = useState('');
  const { socket } = useSelector(({ socket }) => ({
    socket: socket.io,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    socket.on('MESSAGE', (msg) => {
      console.log(msg);
    });
    return ()=>{
      socket.disconnect()
    }
  }, []);
  const onTextareaChange = (e) => {
    setValue(e.target.value);
  };
  const onKeyPressed = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      axios.post(`/client/chat/${chat._id}`, { text: value }).then((data) => {
        dispatch(addMessage(data.data));
      });
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

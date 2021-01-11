import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../services/api/axios_conf';
import { setChatInfo } from '../store/actions/chat';
import { useDispatch } from 'react-redux';
import joinBg from '../images/join-bg.png';

function Join(props) {
  const dispatch = useDispatch();
  const [chatTypes, setchatTypes] = useState([]);

  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    axios.get('/api/chat-types').then((res) => {
      const chatTypes = res.data;
      setchatTypes(chatTypes);
    });
  });

  const handleCLick = (e) => {
    axios
      .post('/client/chat/join', { type: e.target.id })
      .then((data) => {
        dispatch(setChatInfo(data));
        props.history.push('/chat');
      })
      .catch((err) => {
        console.log('Response error');
      });
  };

  return (
    <div className='join' style={{ backgroundImage: `url(${joinBg})` }}>
      <div className='join__inner'>
        <h1 className='join__title'>Welcome to Chat</h1>
        <p className='join__text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <div className='join__buttons'></div>
        {chatTypes.map((type) => {
          return (
            <button
              key={type._id}
              name={type.name}
              id={type._id}
              onClick={handleCLick}
              className='btn'
            >
              {type.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default withRouter(Join);

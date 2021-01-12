import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../services/api/axios_conf';
import { joinChat, getChatInfo, getAdminChatInfo } from '../store/actions/chat';
import { useDispatch, useSelector } from 'react-redux';

import joinBg from '../images/join-bg.png';

function Join({ history }) {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({
    user: user.data,
  }));
  const [chatTypes, setchatTypes] = useState([]);

  useEffect(() => {
    let data;
    const fetchData = async () => {
      if (user?.role?.name === 'Admin') {
        data = await dispatch(getAdminChatInfo());
      }
      if (user?.role?.name === 'Client') {
        data = await dispatch(getChatInfo());
      }

      if (data) {
        history.push('/chat');
      } else {
        axios.get('/chat-types').then((res) => {
          const chatTypes = res.data;
          setchatTypes(chatTypes);
        });
      }
    };
    fetchData();
  }, [dispatch, history, user]);

  const handleCLick = (e) => {
    dispatch(joinChat(e.target.id));
    history.push('/chat');
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

import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from './Avatar';

const ChatsList = ({ chats }) => {
  return (
    <div className='chats'>
      {chats &&
        chats.map((chat) => {
          return (
            <div className='chats__item' key={chat._id}>
              <div className='chats__item-content'>
                <h3>{chat.name}</h3>
                {/* <p>{dialog.lastMessage.text}</p> */}
              </div>
              <Avatar name={chat.name} />
            </div>
          );
        })}
    </div>
  );
};

export default ChatsList;

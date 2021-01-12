import React from 'react';
import Avatar from './Avatar';

const MessagesList = ({ messages }) => {
  return (
    <div className='messages'>
      {messages?.map((message) => (
        <div
          className={`messages__item ${
            message?.isMe ? 'messages__item--is-me' : ''
          }`}
          key={message._id}
        >
          <Avatar name='J' />
          <div className='messages__item-content'>
            <p>{message.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessagesList;

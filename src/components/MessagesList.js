import React from 'react';
import Avatar from './Avatar';

const messages = [
  {
    id: 1,
    text: 'Hi',
    user: {
      id: 10,
    },
  },
  {
    id: 2,
    text: 'Okay',
    user: {
      id: 11,
    },
    isMe: true,
  },
  {
    id: 2,
    text: 'Okay',
    user: {
      id: 11,
    },
    isMe: true,
  },
  {
    id: 2,
    text: 'Okay',
    user: {
      id: 11,
    },
    isMe: true,
  },
  {
    id: 2,
    text: 'Okay',
    user: {
      id: 11,
    },
    isMe: true,
  },
  {
    id: 2,
    text: 'Okay',
    user: {
      id: 11,
    },
    isMe: true,
  },
  {
    id: 2,
    text: 'Okay',
    user: {
      id: 11,
    },
    isMe: true,
  },
  {
    id: 2,
    text: 'Okay',
    user: {
      id: 11,
    },
    isMe: true,
  },
  {
    id: 2,
    text: 'Okay',
    user: {
      id: 11,
    },
    isMe: true,
  },
  {
    id: 2,
    text: 'Okay',
    user: {
      id: 11,
    },
    isMe: true,
  },
  {
    id: 2,
    text: 'Hello',
    user: {
      id: 11,
    },
  },
  {
    id: 2,
    text: 'Okay',
    user: {
      id: 11,
    },
    isMe: true,
  },
  {
    id: 2,
    text: 'Okay',
    user: {
      id: 11,
    },
    isMe: true,
  },
];

const MessagesList = () => {
  return (
    <div className='messages'>
      {messages.map((message) => (
        <div
          className={`messages__item ${
            message.isMe ? 'messages__item--is-me' : ''
          }`}
          key={message.id}
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

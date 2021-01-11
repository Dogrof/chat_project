import React from 'react';
import Avatar from '../components/Avatar';

const dialogs = [
  {
    id: 1,
    user: {
      id: 10,
      name: 'James H',
    },
    lastMessage: {
      id: 20,
      text: 'Lorem Ipsum1 ',
    },
  },
  {
    id: 2,
    user: {
      id: 11,
      name: 'Michael O',
    },
    lastMessage: {
      id: 21,
      text: 'Lorem Ipsum2 ',
    },
  },
  {
    id: 3,
    user: {
      id: 12,
      name: 'David S',
    },
    lastMessage: {
      id: 22,
      text: 'Lorem Ipsum3 ',
    },
  },
  {
    id: 3,
    user: {
      id: 12,
      name: 'David S',
    },
    lastMessage: {
      id: 22,
      text: 'Lorem Ipsum3 ',
    },
  },
  {
    id: 3,
    user: {
      id: 12,
      name: 'David S',
    },
    lastMessage: {
      id: 22,
      text: 'Lorem Ipsum3 ',
    },
  },
  {
    id: 3,
    user: {
      id: 12,
      name: 'David S',
    },
    lastMessage: {
      id: 22,
      text: 'Lorem Ipsum3 ',
    },
  },
  {
    id: 3,
    user: {
      id: 12,
      name: 'David S',
    },
    lastMessage: {
      id: 22,
      text: 'Lorem Ipsum3 ',
    },
  },
  {
    id: 3,
    user: {
      id: 12,
      name: 'David S',
    },
    lastMessage: {
      id: 22,
      text: 'Lorem Ipsum3 ',
    },
  },
  {
    id: 3,
    user: {
      id: 12,
      name: 'David S',
    },
    lastMessage: {
      id: 22,
      text: 'Lorem Ipsum3 ',
    },
  },
];

const DialogsList = () => {
  return (
    <div className='dialogs'>
      {dialogs.map((dialog) => {
        return (
          <div className='dialogs__item' key={dialog.id}>
            <div className='dialogs__item-content'>
              <h3>{dialog.user.name}</h3>
              <p>{dialog.lastMessage.text}</p>
            </div>
            <Avatar name={dialog.user.name} />
          </div>
        );
      })}
    </div>
  );
};

export default DialogsList;

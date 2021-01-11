import React from 'react';

const Avatar = ({ name }) => {
  return <div className='avatar'>{name && name[0].toUpperCase()}</div>;
};

export default Avatar;

import React from 'react';
import Avatar from './Avatar';
import sidebarBg from '../images/chat-sidebar-bg.png';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
  const { user } = useSelector(({ user }) => ({
    user: user.data,
  }));
  return (
    <div className='sidebar' style={{ backgroundImage: `url(${sidebarBg})` }}>
      <Avatar name={user?.name} />
      <h1>{user?.name}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <button className='btn'>Logout</button>
    </div>
  );
};

export default Sidebar;

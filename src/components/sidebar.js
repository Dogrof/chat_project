import React from 'react';
import Avatar from './Avatar';
import sidebarBg from '../images/chat-sidebar-bg.png';

const Sidebar = () => {
  return (
    <div className='sidebar' style={{ backgroundImage: `url(${sidebarBg})` }}>
      <Avatar name='James Oliver' />
      <h1>Mary J</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <button className='btn'>Logout</button>
    </div>
  );
};

export default Sidebar;

import React, { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../store/actions/user';
import clsx from 'clsx';
import ReactPlayer from 'react-player';

import sidebarBg from '../images/chat-sidebar-bg.png';
import sidebarBackIcon from '../images/back-icon.svg';
import phoneIcon from '../images/phone-icon.svg';
import messageIcon from '../images/message-icon.svg';

const Sidebar = (props, sidebarRef) => {
  const dispatch = useDispatch();

  const onLogoutCLick = () => {
    dispatch(logoutAction());
    props.history.push('/');
  };
  const toggleSidebarVisible = () =>
    props.setSidebarVisible((prevState) => !prevState);

  return (
    <div
      className={clsx('sidebar', {
        'sidebar--visible': props.isVisible,
      })}
      ref={sidebarRef}
      style={{ backgroundImage: `url(${sidebarBg})` }}
    >
      <div className='sidebar__inner'>
        <img
          className='sidebar__close'
          src={sidebarBackIcon}
          alt=''
          onClick={toggleSidebarVisible}
        />

        <h1>Chat</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className='sidebar__preview'>
          <ReactPlayer
            url='https://youtu.be/LXb3EKWsInQ'
            width='100%'
            height='100%'
          />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className='sidebar__contacts'>
          <div className='sidebar__contacts-phone'>
            <img src={phoneIcon} alt='' />
            <span>Lorem ipsum dolor sit amet</span>
          </div>
          <div className='sidebar__contacts-message'>
            <img src={messageIcon} alt='' />
            <span>Lorem ipsum dolor sit amet</span>
          </div>
        </div>
      </div>
      <button className='btn' onClick={onLogoutCLick}>
        Logout
      </button>
    </div>
  );
};

export default forwardRef(Sidebar);

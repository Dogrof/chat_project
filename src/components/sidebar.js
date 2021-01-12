import React from 'react';
import { withRouter } from 'react-router-dom';

import Avatar from './Avatar';
import sidebarBg from '../images/chat-sidebar-bg.png';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../store/actions/user';

const Sidebar = ({ history }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({
    user: user.data,
  }));
  const onLogoutCLick = () => {
    dispatch(logoutAction());
    history.push('/');
  };
  return (
    <div className='sidebar' style={{ backgroundImage: `url(${sidebarBg})` }}>
      <Avatar name={user?.name} />
      <h1>{user?.name}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <button className='btn' onClick={onLogoutCLick}>
        Logout
      </button>
    </div>
  );
};

export default withRouter(Sidebar);

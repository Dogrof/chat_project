import React, { memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AuthMiddleware } from './middlewares/AuthMiddleware';

import SignIn from './components/SignIn';
import Join from './components/Join';
import Chat from './components/Chat';

function App() {
  const { isAuth, chat } = useSelector(({ user, chat }) => ({
    isAuth: user.isAuth,
    chat: chat.data,
  }));
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() => (isAuth ? <Join /> : <Redirect to='/auth' />)}
      />
      <Route
        path='/chat'
        // render={() => (isAuth ? <Chat /> : <Redirect to='/auth' />)}
        render={() => <Chat />}
      />
      <Route
        path='/join'
        // render={() => (isAuth ? <Join /> : <Redirect to='/auth' />)}
        render={() => <Join chat={chat} />}
      />
      <Route path='/auth' component={SignIn} />
    </Switch>
  );
}

export default memo(App);

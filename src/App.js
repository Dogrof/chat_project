import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import { AuthMiddleware } from './middlewares/AuthMiddleware';

// import chat from './components/chat';
// import groups from './components/groups';
// import sidebar from './components/sidebar';
import SignIn from './components/signIn';
import Join from './components/Join';
import Chat from './components/Chat';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() =>
          window.localStorage.TOKEN ? <HomePage /> : <Redirect to='/auth' />
        }
      />
      <Route path='/chat' component={Chat} />
      <Route path='/auth' component={SignIn} />
      <Route
        path='/join'
        render={() => (AuthMiddleware() ? <Join /> : <Redirect to='/auth' />)}
      />
    </Switch>
  );
}

export default App;

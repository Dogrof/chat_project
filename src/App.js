import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from './components/SignIn';
import Join from './components/Join';
import Chat from './components/Chat';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Switch>
      <ProtectedRoute exact path={['/join']} component={Join} />
      <ProtectedRoute exact path={['/', '/chat']} component={Chat} />
      <Route exact path='/auth' component={SignIn} />
    </Switch>
  );
}

export default App;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';

function ProtectedRoute({ component: Component, ...rest }) {
  // const { isAuth } = useSelector(({ user }) => ({
  //   isAuth: user.isAuth,
  // }));
  return (
    <Route
      {...rest}
      render={() => {
        if (window.localStorage.TOKEN) {
          return <Component />;
        } else {
          return <Redirect to='/auth' />;
        }
      }}
    />
  );
}

export default ProtectedRoute;

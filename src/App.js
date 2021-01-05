import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import "./css/signIn.css";
import { AuthMiddleware } from './middlewares/AuthMiddleware'

// import chat from './components/chat';
// import groups from './components/groups';
// import sidebar from './components/sidebar';
import SignIn from "./components/signIn";
import HomePage from "./pages/HomePage";
import Join from "./components/join";

function App() {
  return (
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            window.localStorage.TOKEN ? <HomePage /> : <Redirect to="/auth" />
          }
        />
        <Route path="/auth" component={SignIn} />
        <Route path="/join"  render={()=>AuthMiddleware()  ? <Join/> : <Redirect to="/auth" />}/>
      </Switch>
  );
}

export default (App);

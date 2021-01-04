import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import "./css/signIn.css";

// import chat from './components/chat';
// import groups from './components/groups';
// import sidebar from './components/sidebar';
import SignIn from "./components/signIn";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="main-container">
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            window.localStorage.TOKEN ? <HomePage /> : <Redirect to="/auth" />
          }
        />
        <Route path="/auth" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;

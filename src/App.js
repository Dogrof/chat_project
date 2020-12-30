import React from 'react';
import './App.css';
import './css/signIn.css';


// import chat from './components/chat';
// import groups from './components/groups';
// import sidebar from './components/sidebar';
import SignIn from './components/signIn';
import api from './components/axios_conf';

window.axios = api;

function App() {
    return (
        <div className="main-container">
          <SignIn/>
        </div>
    );
}

export default App;

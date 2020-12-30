import React from 'react';
import { useState } from "react";
import { login } from './auth/login'


function SignIn(props) {

  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (evt) => {
      evt.preventDefault();
      login({
        login: "admin",
        password: "test123"
      }).then(data => {
        console.log(data);
      })
  }

    return (
      <div className="main-container" style={{backgroundImage: 'url("./images/sign-back.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="inner-container">
          <h1>Welcome to Chat</h1>
          <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. </p>
          <form action="/" method="post" onSubmit={handleSubmit}>
            <div className="field-wrap">
              <input type="text" required autoComplete="off" placeholder="Login" value={mail}
          onChange={e => setMail(e.target.value)} />
            </div>
            <div className="field-wrap">
              <input type="password" required autoComplete="off" placeholder="Password" value={pass}
          onChange={e => setPass(e.target.value)} />
            </div>
            <div className="checkbox">
              <input type="checkbox" defaultChecked="checked" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <button type="submit">Go</button>
          </form>
        </div>
      </div>
    );
  }

// export default axios.create({
//     baseURL: "https://randomuser.me/api/",
//     responseType: "json"
//   });

export default SignIn;

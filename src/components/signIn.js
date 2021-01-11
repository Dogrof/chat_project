import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../store/actions/user';
import main_back from '../images/sign-back.png';

function SignIn(props) {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(loginAction({ mail, pass })).then(() => {
      props.history.push('/join');
    });
  };

  return (
    <div
      className='main-container'
      style={{
        backgroundImage: 'url(' + main_back + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className='inner-container'>
        <h1>Welcome to Chat</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.{' '}
        </p>
        <form
          autocomplete='off'
          action='/'
          method='post'
          onSubmit={handleSubmit}
        >
          <div className='field-wrap'>
            <input
              type='text'
              required
              autocomplete='off'
              placeholder='Login'
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className='field-wrap'>
            <input
              type='password'
              required
              autocomplete='off'
              placeholder='Password'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className='checkbox'>
            <input type='checkbox' defaultChecked='checked' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <button type='submit'>Go</button>
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

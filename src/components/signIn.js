import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../store/actions/user';
import { toast } from 'react-toastify';

import main_back from '../images/sign-back.png';
import userIcon from '../images/user-icon.svg';
import lockIcon from '../images/lock-icon.svg';

function SignIn(props) {
  const [mail, setMail] = useState('admin@gmail.com');
  const [pass, setPass] = useState('test123');
  const dispatch = useDispatch();

  if (window.localStorage.TOKEN) {
    props.history.push('/join');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginAction({ mail, pass })).then((data) => {
      if (data) {
        props.history.push('/join');
      } else {
        toast.error('Wrong email or password!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };

  return (
    <div
      className='sign-in'
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
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
        </p>
        <form
          autoComplete='off'
          action='/'
          method='post'
          onSubmit={handleSubmit}
        >
          <div className='field-wrap'>
            <img src={`${userIcon}`} alt='' />
            <input
              type='text'
              required
              autoComplete='off'
              placeholder='Login'
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className='field-wrap'>
            <img src={`${lockIcon}`} alt='' />
            <input
              type='password'
              required
              autoComplete='off'
              placeholder='Password'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className='checkbox'>
            <input type='checkbox' defaultChecked='checked' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <button className='btn' type='submit'>
            Go
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

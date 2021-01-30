import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [id, setUserId] = useState(0);
  const [fullname, setFullname] = useState('');
  const [loggedIn, changeLog] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting ${username} ${password}`);
    axios.post('/login', {
      params: {
        password,
        username,
      },
    })
      .then((res) => {
        setUserId(res.data[0].id);
        setFullname(res.data[0].fullname);
        changeLog(true);
      })
      .catch(err => {
        console.log(err, 'error');
      })
  };

  return (
    <div>
      <img className="loginBkgd" src="./loginBkgd.svg" />
      <div className="center">
        <div className="title">
          <div className="logo">Rooting For You</div>
          <div className="description">a water tracking app for your plant friends</div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="signInTitle">Sign In</div>
          <div className="username">
            <input
              className="formTxt"
              value={username}
              onChange={(e) => {
                e.preventDefault();
                setUsername(e.target.value);
              }}
              placeholder="username"
            />
          </div>
          <div className="password">
            <input
              className="formTxt"
              value={password}
              type="password"
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
              placeholder="password"
            />
          </div>
          {loggedIn ? <Redirect to={{ pathname: '/homepage', query: id, fullname }} /> : null}
          {/* <Link to={{ pathname: '/homepage', query: userId }}> */}
            <input className="submitBtn" type="submit" value="submit" />
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};

export default Login;

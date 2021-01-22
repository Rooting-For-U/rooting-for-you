import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting ${username} ${password}`);
    axios.post('./login', {
      params: {
        password,
        username,
      },
    })
      .then((res) => {
        console.log(res);
        const sampleUserId = 6;
      });
  };

  return (
    <div>
      <div className="center">
        <div className="title">
          <div className="logo">Rooting For You</div>
          <div className="description">a water tracking app for your plant friends</div>
        </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="signInTitle">Sign In</div>
        <div className="username">
          <input className="formTxt" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
        </div>
        <div className="password">
          <input className="formTxt" value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
        </div>
        <input className="submitBtn" type="submit" value="submit" />
      </form>
    </div>
    <img className='loginBkgd' src='./loginBkgd.svg'></img>
    </div>
  );
};

export default Login;

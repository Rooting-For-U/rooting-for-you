import React, { useState } from 'react';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';

const Signup = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [id, setUserId] = useState(0);
  const [loggedIn, changeLog] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting ${username} ${password}`);
    axios.post('/signup', {
      params: {
        password,
        username,
        fullname: `${firstname} ${lastname}`,
        email,
      },
    })
      .then((result) => {
        console.log(result.data.insertId);
        setUserId(result.data.insertId);
        setFullname(`${firstname} ${lastname}`);
        changeLog(true);
      })
      .catch((err) => {
        console.log(err, 'error');
      });
  };

  return (
    <div>
      <img className="loginBkgd" src="./loginBkgd.svg" />
      <div className="center">
        <div className="title">
          <div className="logo">Rooting For You</div>
          <div className="description">a water tracking app for your plant friends</div>
        </div>
        <form className="form2" onSubmit={handleSubmit}>
          <div className="signInTitle">Sign Up</div>
          <div className="firstname">
            <label className="formTxt">
              First Name:
              <input
                className="formTxt"
                value={firstname}
                onChange={(e) => {
                  e.preventDefault();
                  setFirstname(e.target.value);
                }}
                placeholder="first name"
              />
            </label>
          </div>
          <div className="lastname">
            <label className="formTxt">
              Last Name:
              <input
                className="formTxt"
                value={lastname}
                onChange={(e) => {
                  e.preventDefault();
                  setLastname(e.target.value);
                }}
                placeholder="last name"
              />
            </label>
          </div>
          <div className="username">
            <label className="formTxt">
              Username:
              <input
                className="formTxt"
                value={username}
                onChange={(e) => {
                  e.preventDefault();
                  setUsername(e.target.value);
                }}
                placeholder="username"
              />
            </label>
          </div>
          <div className="password">
            <label className="formTxt">
              Password:
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
            </label>
          </div>
          <div className="email">
            <label className="formTxt">
              Email:
              <input
                className="formTxt"
                value={email}
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
                placeholder="email"
              />
            </label>
          </div>
          {loggedIn ? <Redirect to={{ pathname: '/homepage', query: id, fullname }} /> : null}
          <input className="submitBtn2" type="submit" value="submit" />
          <p />
          <button className="submitBtn2" type="button" value="back" onClick={() => { history.push('/'); }}>back</button>

        </form>
      </div>
    </div>
  );
};

export default Signup;

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const App = () => {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  return (
    <div>
      <img className="loginBkgd" src="./loginBkgd.svg" />
      <div className="center">
        <div className="title">
          <div className="logo">Rooting For You</div>
          <div className="description">a water tracking app for your plant friends</div>
        </div>
        <div className="form">
          <div className="signInTitle">Welcome!</div>
          <button className="submitBtn" type="button" onClick={() => { setLogin(true); }}>Login</button>
          <p />
          <button className="submitBtn" type="button" onClick={() => { setSignup(true); }}>Sign Up</button>
        </div>
      </div>
      {login ? <Redirect to={{ pathname: '/login' }} /> : null}
      {signup ? <Redirect to={{ pathname: '/signup' }} /> : null}
    </div>
  );
};

export default App;

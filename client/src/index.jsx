import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Homepage from './components/Homepage.jsx';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      {/* <Route exact path="/" component={App} /> */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/homepage" component={Homepage} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);

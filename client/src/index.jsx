import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App.jsx';
import Login from './components/Login.jsx';
import Homepage from './components/Homepage.jsx';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      {/* <Route exact path="/" component={App} /> */}
      {/* <Route exact path="/login" component={Login} /> */}
      <Route exact path="/homepage" component={Homepage} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);

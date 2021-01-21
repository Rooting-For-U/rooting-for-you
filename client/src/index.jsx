import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App.jsx';
import Login from './components/Login.jsx';

// ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(
  <Router>
     <Switch>
        <Route exact path="/" component={App}/>
      <Route exact path="/login" component={Login}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);
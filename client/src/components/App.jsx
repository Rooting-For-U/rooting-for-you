import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login.jsx';
import { Link } from 'react-router-dom';


const App = () => {
  const [login, enterLogin] = useState(false);

  return (
    <div>
      <Link to='/Login'>Go to Login Page</Link>
      <Link to="/homepage">Go to homepage</Link>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login.jsx';

const App = () => {
  const [login, enterLogin] = useState(false);

  return (
    <div>
      {!login ? (<Login />) : null}
    </div>
  );
};

export default App;

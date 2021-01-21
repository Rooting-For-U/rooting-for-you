import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plant from './Plant.jsx';

const Homepage = (userId) => {
  console.log('Homepage is called');
  const [plants, setPlants] = useState([]);
  // const[userId, setUserId] = useState(null); // this go to App

  useEffect(() => {
    axios.get('/plants', {
      params: {
        id: userId,
      },
    })
      .then((allplants) => {
        setPlants(allplants);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div id="top-banner">
        <span id="name-rooting-for-you">Rooting For You</span>
        <button type="button">Add Plant</button>
        <button type="button">Find Plant</button>
        <button type="button">Logout</button>
      </div>
      <span>
        Welcome back
        {}
        , here's your plant status...
      </span>
      <div>
        {plants.map(((plant) => (
          <Plant plant={plant} userId={userId} />
        )))}
      </div>

    </div>
  );
};

export default Homepage;

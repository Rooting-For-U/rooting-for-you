import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plant from './Plant.jsx';

const Homepage = (userId) => {
  console.log('Homepage is called');
  const waterDate = Date();
  const sampleData = [
    {
      plantName: 'A flower',
      waterDateTime: waterDate,
      location: 'kitchen',
      imgURL: 'sampleWhiteFlower.jpg',
    },
    {
      plantName: 'A grass',
      waterDateTime: waterDate,
      location: 'bedroom',
      imgURL: 'sampleWhiteFlower.jpg',
    },
    {
      plantName: 'A tree',
      waterDateTime: waterDate,
      location: 'yard I guess',
      imgURL: 'sampleWhiteFlower.jpg',
    },
  ];
  const [plants, setPlants] = useState(sampleData);
  // const[userId, setUserId] = useState(null); // this go to App

  // useEffect(() => {
  //   axios.get('/plants', {
  //     params: {
  //       id: userId,
  //     },
  //   })
  //     .then((allplants) => {
  //       setPlants(allplants);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="homepage">
      <div className="navigation">
        <span className="navLogo">Rooting For You</span>
        <button className="addPlant" type="button">add plant</button>
        <button className="findPlant " type="button">find plant</button>
        <button className="logout" type="button">log out</button>
      </div>
      <span className="welcomeMsg">
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

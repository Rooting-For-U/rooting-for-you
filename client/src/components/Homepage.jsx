import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plant from './Plant.jsx';

const Homepage = (userId) => {
  const [plants, setPlants] = useState([]);
  // const[userId, setUserId] = useState(null); // this go to App

  useEffect((userId) => {
    axios.get('/u/plants', {
      params: {
        id: 2,
      },
    })
      .then(({ data }) => {
        console.log('allplatns: ', data);
        setPlants(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
      <div className ="content">
        <div className="plantContainer">
          {plants.map(((plant) => (
            <Plant plant={plant} userId={userId} />
          )))}
        </div>
      </div>
      <img className="homepageImg" src='/homeBkgd.svg'></img>
    </div>
  );
};

export default Homepage;


// const waterDate = Date();
// const sampleData = [
//   {
//     plantName: 'Orchid',
//     waterDateTime: waterDate,
//     location: 'kitchen',
//     imgURL: 'sampleWhiteFlower.jpg',
//   },
//   {
//     plantName: 'Succulent',
//     waterDateTime: waterDate,
//     location: 'bedroom',
//     imgURL: 'sampleWhiteFlower.jpg',
//   },
//   {
//     plantName: 'Herb',
//     waterDateTime: waterDate,
//     location: 'yard I guess',
//     imgURL: 'sampleWhiteFlower.jpg',
//   },
//   {
//     plantName: 'Herb',
//     waterDateTime: waterDate,
//     location: 'yard I guess',
//     imgURL: 'sampleWhiteFlower.jpg',
//   },
//   {
//     plantName: 'Herb',
//     waterDateTime: waterDate,
//     location: 'yard I guess',
//     imgURL: 'sampleWhiteFlower.jpg',
//   },
//   {
//     plantName: 'Herb',
//     waterDateTime: waterDate,
//     location: 'yard I guess',
//     imgURL: 'sampleWhiteFlower.jpg',
//   },
//   {
//     plantName: 'Herb',
//     waterDateTime: waterDate,
//     location: 'yard I guess',
//     imgURL: 'sampleWhiteFlower.jpg',
//   },
//   {
//     plantName: 'Herb',
//     waterDateTime: waterDate,
//     location: 'yard I guess',
//     imgURL: 'sampleWhiteFlower.jpg',
//   },
// ];


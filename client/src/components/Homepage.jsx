import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plant from './Plant.jsx';
import AddPlant from './AddPlant.jsx';

const Homepage = (userId) => {
  const [plants, setPlants] = useState([]);
  const [addPlant, showAddPlant] = useState(false);
  // const[userId, setUserId] = useState(null); // this go to App
  const sampleId = 2;

  useEffect(() => {
    axios.get('/u/plants', {
      params: {
        id: sampleId,
      },
    })
      .then(({ data }) => {
        console.log('allplatns: ', data);
        setPlants(data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log('plants at homepage: ', plants);
  return (
    <div className="homepage">
      <img className="homepageImg" src='/homeBkgd.svg'></img>
      <div className="navigation">
        <span className="navLogo">Rooting For You</span>
        <button className="addPlant" type="button" onClick={() => { showAddPlant(true); }}>add plant</button>
        <button className="findPlant " type="button">find plant</button>
        <button className="logout" type="button">log out</button>
      </div>
      <div className="this-is-a-modal">
        {addPlant && (<AddPlant userRef={sampleId} close={showAddPlant} setPlants={setPlants} plants={plants} />)}
      </div>
      <span className="welcomeMsg">
        Welcome back
        {}
        , here's your plant status...
      </span>
      <div className ="content">
        <div className="plantContainer">
          {plants.map(((plant) => (
            <Plant plant={plant} userId={sampleId} />
          )))}
        </div>
      </div>
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


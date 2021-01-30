import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Plant from './Plant.jsx';
import AddPlant from './AddPlant.jsx';
import { Link, useParams, useLocation } from 'react-router-dom';

const Homepage = (id) => {
  const [plants, setPlants] = useState([]);
  const [addPlant, showAddPlant] = useState(false);
  const[userId, setUserId] = useState(null); // this go to App

  console.log(id);

  useEffect(() => {
    console.log(id.location.query);
    setUserId(id);
    axios.get('/u/plants', {
      params: {
        id: id.location.query,
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
        <Link to='/'><button className="logout" type="button">log out</button></Link>
      </div>
      {addPlant && (<AddPlant userRef={sampleId} close={showAddPlant} setPlants={setPlants} plants={plants} />)}
      {
        !addPlant && (
        <span className="welcomeMsg">
        Welcome back
        {` ${id.location.fullname}`}
        , here's your plant status...
        </span>
        )
      }

      <div className ="content">
        {
        !addPlant &&
        <div className="plantContainer">
        {plants.map(((plant) => (
          <Plant plant={plant} userId={userId} />
        )))}
        </div>
        }

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


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useLocation } from 'react-router-dom';
import Plant from './Plant.jsx';
import AddPlant from './AddPlant.jsx';
import FindPlant from './FindPlant.jsx';

const Homepage = (data) => {
  const [plants, setPlants] = useState([]);
  const [addPlant, showAddPlant] = useState(false);
  const [findPlant, showFindPlant] = useState(false);
  const [userId, setUserId] = useState(null); // this go to App

  console.log('updated homepage component');
  useEffect(() => {
    setUserId(data.location.query);
    axios.get('/u/plants', {
      params: {
        id: data.location.query,
      },
    })
      .then(({ data }) => {
        // console.log('allplatns: ', data);
        setPlants(data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log('plants at homepage: ', plants);
  return (
    <div className="homepage">
      <img className="homepageImg" src="/homeBkgd.svg" />
      <div className="navigation">
        <div className="navLogo" onClick={() => { showAddPlant(false); showFindPlant(false)}}>Rooting For You</div>
        <button className="addPlant" type="button" onClick={() => { showFindPlant(false); showAddPlant(true); }}>add plant</button>
        <button className="findPlant " type="button" onClick={() => { showAddPlant(false); showFindPlant(true);}}>find plant</button>
        <Link to="/"><button className="logout" type="button">log out</button></Link>
      </div>
      {addPlant && (
      <AddPlant
        userRef={userId}
        close={showAddPlant}
        setPlants={setPlants}
        plants={plants}
      />
      )}
      {findPlant && (
        <FindPlant />
      )}
      {
        !addPlant && !findPlant && (
        <span className="welcomeMsg">
          Welcome back
          {` ${data.location.fullname}`}
          , here's your plant status...
        </span>
        )
      }

      <div className="content">
        {
        !addPlant && !findPlant
        && (
        <div className="plantContainer">
          {plants.map(((plant, index) => (
            <Plant key={plant + index} plant={plant} userId={userId} />
          )))}
        </div>
        )
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

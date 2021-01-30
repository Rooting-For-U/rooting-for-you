import axios from 'axios';
import React, { useState, useEffect } from 'react';

// send plantId, timestamp, param to server when water something
const Plant = ({ plant, userId }) => {
  const [waterDate, setWaterDate] = useState('');
  const now = new Date();
  const today = now.getDate();
  const lastWater = new Date(plant.lastWatered);
  const lastWaterDate = lastWater.getDate();
  const initialDaysNoWater = today - lastWaterDate;
  const [daysNoWater, setDaysNoWater] = useState(initialDaysNoWater);
  const [fullWaterDrop, setFullWaterDrop] = useState(false);
console.log(plant, 'inside plant');

console.log(plant, 'inside plant component');
  useEffect(() => {
    if (daysNoWater === 0) {
      setFullWaterDrop(true);
    }
  }, []);

  // const saveWaterDate = () => {
  //   axios.patch('api', {
  //     params: {
  //       id: userId,
  //       lastWatered: now
  //     },
  //   })
  //   .then({ data });
  // }

  const handleClick = (e) => {
    e.preventDefault();
    setWaterDate(now);
    setDaysNoWater(0);
    setFullWaterDrop(true);
    console.log(now, today, 'dates');
    //update database with timestamp
  };

  return (
    <div className="plant" key={plant.chosen_name}>

      <img className="plantImg" src={plant.plantImg} alt="plant" />

      {
        fullWaterDrop &&
        <img className="waterDrop" src='./fullDrop.svg' value={plant.id} onClick={handleClick} alt="rain-drop" />
      }
      {
        !fullWaterDrop &&
        <img className="waterDrop" src='./drop.svg' value={plant.id} onClick={handleClick} alt="rain-drop" />
      }

      <span className="plantName">{plant.chosen_name}</span><br/>
      <span className="plantFamily">{plant.plant_name}</span>
      <div className="plantTxt">
        <span> last watered: <b>{daysNoWater}</b> day(s) ago</span>
        <br />
        <span>located in the <b>{plant.location}</b></span>
      </div>
      <br />
    </div>
  );
};

export default Plant;

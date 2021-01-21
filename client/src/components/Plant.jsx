import React, { useState } from 'react';

// send plantId, timestamp, param to server when water something
const Plant = (plant) => {
  console.log('Single Plant is called');
  console.log('Plant input: ', plant);

  const [waterDate, setWaterDate] = useState('');
  const now = new Date();
  const today = now.getDate();
  const lastWater = new Date(plant.plant.waterDateTime);
  const lastWaterDate = lastWater.getDate();
  const daysNoWater = today - lastWaterDate;
  console.log('daysNoWater', daysNoWater);

  const handleClick = (e) => {
    e.preventDefault();
    alert('Clicked water button');
  };

  return (
    <div className="single-plant-box" key={plant.plant.plantName}>
      <img src={plant.plant.imgURL} alt="plant" width="100" height="120" />
      <span>{plant.plant.plantName}</span>
      <br />
      <span>Last time watered: </span>
      <span>{plant.plant.waterDateTime.slice(0, 16)}</span>
      <br />
      <span>{plant.plant.location}</span>
      <br />
      <button type="button" onClick={handleClick}>Water</button>
    </div>
  );
};

export default Plant;

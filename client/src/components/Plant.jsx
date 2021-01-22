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
    <div className="plant" key={plant.plant.plantName}>
      <img className="plantImg" src={plant.plant.imgURL} alt="plant" />
      <img className="waterDrop" src='./drop.svg' onClick={handleClick}/>
      <span className="plantName" >{plant.plant.plantName}</span>
      <div className="plantTxt" >
        <span> last watered: {plant.plant.waterDateTime.slice(0, 16)} </span>
        <br />
        <span>{plant.plant.location}</span>
      </div>
      <br />
    </div>
  );
};

export default Plant;

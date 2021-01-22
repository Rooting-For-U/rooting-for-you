import React, { useState } from 'react';

// send plantId, timestamp, param to server when water something
const Plant = (plant) => {
  const [waterDate, setWaterDate] = useState('');
  const now = new Date();
  const today = now.getDate();
  const lastWater = new Date(plant.plant.lastWatered);
  const lastWaterDate = lastWater.getDate();
  const daysNoWater = today - lastWaterDate;
  console.log('daysNoWater: ', daysNoWater);

  const handleClick = (e) => {
    e.preventDefault();
    console.log('e.target.value: ', e.target.value);
    alert('Clicked water button');
  };

  return (
    <div className="plant" key={plant.plant.chosen_name}>
      <img className="plantImg" src={plant.plant.plantImg} alt="plant" />
      {/* <button className="waterDrop" src='./drop.svg' value={plant.plant.id} onClick={handleClick} alt="rain-drop">&#128167;</button> */}
      <img className="waterDrop" src='./drop.svg' value={plant.plant.id} onClick={handleClick} alt="rain-drop" />
      <span className="plantName">{plant.plant.plant_name}</span>
      <div className="plantTxt">
        <span> last watered: {plant.plant.lastWatered.slice(0, 10)} </span>
        <br />
        <span>{plant.plant.location}</span>
      </div>
      <br />
    </div>
  );
};

export default Plant;

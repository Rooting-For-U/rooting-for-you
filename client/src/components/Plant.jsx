import React, { useState, useEffect } from 'react';

// send plantId, timestamp, param to server when water something
const Plant = (plant) => {
  const [waterDate, setWaterDate] = useState('')
  const now = new Date();
  const today = now.getDate();
  const lastWater = new Date(plant.plant.lastWatered);
  const lastWaterDate = lastWater.getDate();
  const initialDaysNoWater = today - lastWaterDate;
  const [daysNoWater, setDaysNoWater] = useState(initialDaysNoWater);
  const [fullWaterDrop, setFullWaterDrop] = useState(false);
console.log(plant.plant)


  useEffect(() => {
    if (daysNoWater === 0) {
      setFullWaterDrop(true);
    }
  }, []);



  const handleClick = (e) => {
    e.preventDefault();
    setWaterDate(now);
    setDaysNoWater(0);
    setFullWaterDrop(true);
    //update database with timestamp
  };

  return (
    <div className="plant" key={plant.plant.chosen_name}>

      <img className="plantImg" src={plant.plant.plantImg} alt="plant" />

      {
        fullWaterDrop &&
        <img className="waterDrop" src='./fullDrop.svg' value={plant.plant.id} onClick={handleClick} alt="rain-drop" />
      }
      {
        !fullWaterDrop &&
        <img className="waterDrop" src='./drop.svg' value={plant.plant.id} onClick={handleClick} alt="rain-drop" />
      }

      <span className="plantName">{plant.plant.chosen_name}</span><br/>
      <span className="plantFamily">{plant.plant.plant_name}</span>
      <div className="plantTxt">
        <span> last watered: <b>{daysNoWater}</b> day(s) ago</span>
        <br />
        <span>located in the <b>{plant.plant.location}</b></span>
      </div>
      <br />
    </div>
  );
};

export default Plant;

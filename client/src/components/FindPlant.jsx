import axios from 'axios';
import React, { useState } from 'react';
import FindPlantIndividual from './FindPlantIndividual.jsx';

export default function FindPlant() {
  const [plants, addPlants] = useState([]);
  const [plantSearch, setPlantSearch] = useState('');

  const findPlant = (family) => {
    axios.get(`/plants/:${family}`)
      .then(({ data }) => {
        addPlants(data.data);
      })
      .catch((err) => { console.log(err); });
  };

  const handleSubmit = (e) => {
    addPlants([]);
    e.preventDefault();
    findPlant(plantSearch);
  };

  return (
    <div className="findPlantMain">
      <div className="addPlantMsg">
        Find your plant!
        <br />
        Know the name already? Type in the search box to find the exact plant!
        {' '}
      </div>
      <form className="findPlantForm" onSubmit={handleSubmit}>
        <div>
          <input
            className="formTxt"
            value={plantSearch}
            onChange={(e) => {
              e.preventDefault();
              setPlantSearch(e.target.value);
            }}
            placeholder="search for plant"
          />
        </div>
        <input className="findPlantBtn" type="submit" value="find plant" />
      </form>
      <div className="findPlantContainer">
      {plants.length > 0 ? (plants.map((plant, index) => (
        <FindPlantIndividual key={plant + index} plant={plant} />
      ))) : null}
      </div>
    </div>
  );
}

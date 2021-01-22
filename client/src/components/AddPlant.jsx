import React, { useState } from 'react';
import axios from 'axios';

const AddPlant = (userRef) => {
  const [plantName, setPlantName] = useState('');
  const plantImg = 'https://cdn.shopify.com/s/files/1/0252/3928/9903/products/zz-plant-547577_540x.jpg?v=1606033857';
  const [chosenName, setChosenName] = useState('');
  const lastWatered = Date();
  const status = 1;
  const [location, seLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/u/new', {
      params: {
        userRef,
        plant_name: plantName,
        plantImg,
        chosen_name: chosenName,
        lastWatered,
        status,
        location,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={plantName}
        onChange={(e) => {
          e.preventDefault();
          setPlantName(e.target.value);
        }}
        placeholder="Plant family"
      />
      <input
        value={chosenName}
        onChange={(e) => {
          e.preventDefault();
          setChosenName(e.target.value);
        }}
        placeholder="Give it a name!"
      />
      <input
        value={location}
        onChange={(e) => {
          e.preventDefault();
          seLocation(e.target.value);
        }}
        placeholder="Give your plant a name"
      />
    </form>
  );
};

module.exports.AddPlant = AddPlant;

// reference
// id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
// userRef int NOT NULL,
// plant_name VARCHAR(255) NOT NULL,
// plantImg VARCHAR(255) NOT NULL,
// chosen_name VARCHAR(255),
// lastWatered DATE,
// status BOOLEAN NOT NULL,
// location VARCHAR(255),
// FOREIGN KEY (userRef) REFERENCES users(id)

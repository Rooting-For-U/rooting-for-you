import React from 'react';

export default function FindPlantIndividual({ plant }) {
  return (
      <div className="plant">
          <img className="plantImg" src={plant.image_url} alt="plant" />
          {plant.common_name}
          <br />
          {plant.scientific_name}
      </div>
  );
};
// PlayerCard.js
import React from 'react';
import Rating from './Rating';

const PlayerCard = ({ name, description, rating }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <h4>{description}</h4>
      <p>
        <Rating rating={rating} />
      </p>
    </div>
  );
};

export default PlayerCard;

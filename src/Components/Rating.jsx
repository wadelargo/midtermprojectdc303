// Rating.js
import React from 'react';

const Rating = ({ rating }) => {
  const filledStars = Math.round(rating);
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      stars.push(<span key={i} className="filled"></span>);
    } else {
      stars.push(<span key={i}></span>);
    }
  }

  return (
    <div className="rating">
      {stars}
    </div>
  );
};

export default Rating;

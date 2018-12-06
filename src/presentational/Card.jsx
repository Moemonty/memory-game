// Card.js
import React from 'react';
import './Card.css';

const Card = props => {

  const { name, onCardFlip } = props;
  return (
    <div className="card" onClick={ onCardFlip }>
      { name }
    </div>
  );
};

export default Card;
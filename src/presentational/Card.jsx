// Card.js
import React from 'react';
import './Card.css';

const Card = props => {

  const { name, onCardFlip } = props;
  return (
    <div className="card" onClick={ onCardFlip } data-name={ name }>
      <div className="card__front-face">
        { name }
      </div>
      <div className="card__back-face">
        Game Card
      </div>
    </div>
  );
};

export default Card;
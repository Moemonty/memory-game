// Card.js
import React from 'react';
import './Card.css';

const Card = props => {

  const { name, img, onCardFlip } = props;
  return (
    <div className="card" onClick={ onCardFlip } data-name={ name }>
      <div className="card__front-face">
        <img className="card__img" src={img} alt={name} />
      </div>
      <div className="card__back-face">
        Game Card
      </div>
    </div>
  );
};

export default Card;
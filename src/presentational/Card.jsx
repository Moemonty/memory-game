// Card.js
import React from 'react';
import './Card.css';

import PropTypes from 'prop-types';

const Card = props => {

  const { name, img, onCardFlip, cardBack } = props;
  return (
    <div className="card" onClick={ onCardFlip } data-name={ name }>
      <div className="card__front-face">
        <img className="card__img" src={img} alt={name} />
      </div>
      <div className="card__back-face">
        <img alt={name} src={cardBack} className="card__img"/>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onCardFlip: PropTypes.func.isRequired,
  cardBack: PropTypes.string.isRequired,
}

export default Card;
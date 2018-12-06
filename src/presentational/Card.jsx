// Card.js

import React from 'react';

const Card = props => {
  const { title } = props;
  return (
    <div className="card">
      { title }
    </div>
  );
};

export default Card;
// CardGridContainer.js
import React, { Component } from 'react';

const cardStyle = {
  border: 'solid 2px #fff',
  borderRadius: '3px',
  background: '#000',
  color: '#fff',
  minHeight: 200,
  padding: '10px'
};

class CardGridContainer extends Component {
  render() {
    return (
      <div id="card-grid">
        <div className="card" style={cardStyle}>
          Ace of Spades
        </div>
      </div>
    );
  }
}

export default CardGridContainer;
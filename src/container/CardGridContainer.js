// CardGridContainer.js
import React, { Component } from 'react';
import './CardGridContainer.css';

class CardGridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { status: 'unsolved'}
  }

  render() {
    return (
      <div id="card-grid">
        <div className="card">
          Ace of Spades : { this.state.status }
        </div>
      </div>
    );
  }
}

export default CardGridContainer;
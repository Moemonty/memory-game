// CardGridContainer.js
import React, { Component } from 'react';
import Card from '../presentational/Card';
import './CardGridContainer.css';

class CardGridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { status: 'unsolved'}
  }

  render() {
    return (
      <div id="card-grid">
        <Card title="Ace of Spades" />
        <Card title="Ace of Hearts" />
        <Card title="Ace of Clubs" />
        <Card title="Ace of Diamonds" />

        <Card title="Ace of Spades" />
        <Card title="Ace of Hearts" />
        <Card title="Ace of Clubs" />
        <Card title="Ace of Diamonds" />

        <Card title="Jack of Spades" />
        <Card title="Jack of Hearts" />
        <Card title="Jack of Clubs" />
        <Card title="Jack of Diamonds" />

        <Card title="Jack of Spades" />
        <Card title="Jack of Hearts" />
        <Card title="Jack of Clubs" />
        <Card title="Jack of Diamonds" />

      </div>
    );
  }
}

export default CardGridContainer;
// CardGridContainer.js
import React, { Component } from 'react';
import Card from '../presentational/Card';
import './CardGridContainer.css';

class CardGridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'unsolved',
      firstCard: null,
      secondCard: null
    }
  }

  // Public class fields syntax
  flipCard = event => {
    console.log(event.target.innerText);
    const name = event.target.innerText;

    if (this.state.firstCard === null) {
      this.setState({
        firstCard: name
      });
    } else {
      console.log('card already set');
    }

    console.log(this.state, ' is state');
    console.log(this, 'card clicked');
  }

  render() {
    return (
      <div className="div">
        <div className="CardGridContainer">
          {/* onCardFlip prop takes flipCard function as param */}
          <Card name="Ace of Spades" onCardFlip={ this.flipCard } />
          <Card name="Ace of Hearts" />
          <Card name="Ace of Clubs" />
          <Card name="Ace of Diamonds" />
          <Card name="Ace of Spades" />
          <Card name="Ace of Hearts" />
          <Card name="Ace of Clubs" />
          <Card name="Ace of Diamonds" />
          <Card name="Jack of Spades" />
          <Card name="Jack of Hearts" />
          <Card name="Jack of Clubs" />
          <Card name="Jack of Diamonds" />
          <Card name="Jack of Spades" />
          <Card name="Jack of Hearts" />
          <Card name="Jack of Clubs" />
          <Card name="Jack of Diamonds" />
          <Card name="Queen of Spades" />
          <Card name="Queen of Hearts" />
          <Card name="Queen of Clubs" />
          <Card name="Queen of Diamonds" />
          <Card name="Queen of Spades" />
          <Card name="Queen of Hearts" />
          <Card name="Queen of Clubs" />
          <Card name="Queen of Diamonds" />
        </div>
      </div>
    );
  }
}

export default CardGridContainer;
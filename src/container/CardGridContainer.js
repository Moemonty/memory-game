// CardGridContainer.js
import React, { Component } from 'react';
import Card from '../presentational/Card';
import './CardGridContainer.css';

class CardGridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'unsolved',
      cardFlipped: false,
      firstCard: null,
      secondCard: null
    }
  }

  // Public class fields syntax
  flipCard = event => {
    console.log(event.currentTarget);
    const name = event.currentTarget.dataset.name;
    console.log(name, ' is the name of the card');

    if (!this.state.cardFlipped) {
      event.currentTarget.classList.add('flip');
      this.setState({
        cardFlipped: true,
        firstCard: name
      });
      console.log(this.state);
    } else {
      console.log('a card has been flipped');
      console.log(' find another card');
    }

    console.log(this.state, ' is state');
  }

  render() {
    return (
      <div className="div">
        <div className="CardGridContainer">
          {/*
            @TODO: Iterate through a date list
            that will dynamically create each card from a data list
            onCardFlip prop takes flipCard function as param
          */}
          <Card name="Ace of Spades" onCardFlip={ this.flipCard } />
          <Card name="Ace of Hearts" onCardFlip={ this.flipCard } />
          <Card name="Ace of Clubs" onCardFlip={ this.flipCard } />
          <Card name="Ace of Diamonds" onCardFlip={ this.flipCard }/>
          <Card name="Ace of Spades" onCardFlip={ this.flipCard } />
          <Card name="Ace of Hearts" onCardFlip={ this.flipCard } />
          <Card name="Ace of Clubs" onCardFlip={ this.flipCard } />
          <Card name="Ace of Diamonds" onCardFlip={ this.flipCard } />
          <Card name="Jack of Spades" onCardFlip={ this.flipCard } />
          <Card name="Jack of Hearts" onCardFlip={ this.flipCard } />
          <Card name="Jack of Clubs" onCardFlip={ this.flipCard } />
          <Card name="Jack of Diamonds" onCardFlip={ this.flipCard } />
          <Card name="Jack of Spades" onCardFlip={ this.flipCard } />
          <Card name="Jack of Hearts" onCardFlip={ this.flipCard } />
          <Card name="Jack of Clubs" onCardFlip={ this.flipCard } />
          <Card name="Jack of Diamonds" onCardFlip={ this.flipCard } />
          <Card name="Queen of Spades" onCardFlip={ this.flipCard } />
          <Card name="Queen of Hearts" onCardFlip={ this.flipCard } />
          <Card name="Queen of Clubs" onCardFlip={ this.flipCard } />
          <Card name="Queen of Diamonds" onCardFlip={ this.flipCard } />
          <Card name="Queen of Spades" onCardFlip={ this.flipCard } />
          <Card name="Queen of Hearts" onCardFlip={ this.flipCard } />
          <Card name="Queen of Clubs" onCardFlip={ this.flipCard } />
          <Card name="Queen of Diamonds" onCardFlip={ this.flipCard } />
        </div>
      </div>
    );
  }
}

export default CardGridContainer;
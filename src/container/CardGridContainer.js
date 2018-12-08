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
      secondCard: null,
      lockBoard: false
    }
  }

  // removePair = () => {
  //   this.state.firstCard
  // }

  unflipCards = () => {
    this.setState({
      lockBoard: false
    });

    this.state.firstCard.classList.remove('flip');
    this.state.secondCard.classList.remove('flip');
  }

  checkMatch = () => {
    // debugger;

    console.log(this.state.firstCard.dataset.name);
    console.log(this.state.secondCard.dataset.name);

    if (this.state.firstCard.dataset.name === this.state.secondCard.dataset.name) {
      this.state.firstCard.setAttribute("disabled", "disabled");
      this.state.secondCard.setAttribute("disabled", "disabled");
      return
    } else {
      console.log('unflip cards');
      
      setTimeout(() => {
        this.unflipCards();
      }, 1500);
    }

    this.setState({
      lockBoard: false
    });
  }

  // Public class fields syntax
  flipCard = event => {
    console.log(event.currentTarget, ' is the current card');
    const card = event.currentTarget;

    if (this.state.lockBoard) {
      console.log('board locked');
      return;
    }

    // if disabled, short circuit
    if (card.attributes.disabled) {
      console.log('dont check card');
      return;
    }

    event.currentTarget.classList.add('flip');

    if (!this.state.cardFlipped) {
      
      this.setState({
        cardFlipped: true,
        firstCard: card
      });
      return;
    }

    this.setState({
      secondCard: card,
      cardFlipped: false,
      lockBoard: true,
    }, () => {
      this.checkMatch();
    });
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
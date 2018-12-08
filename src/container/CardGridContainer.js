// CardGridContainer.js
import React, { Component } from 'react';
import Card from '../presentational/Card';
import './CardGridContainer.css';

class CardGridContainer extends Component {
  constructor(props) {
    super(props);

    console.log(this, 'rendered Component');

    this.state = {
      status: 'unsolved',
      cardFlipped: false,
      firstCard: null,
      secondCard: null,
      lockBoard: false,
      matchCount: 0
    }
  }

  resetBoard = () => {
    this.setState({
      cardFlipped: false,
      lockBoard: false,
      firstCard: null,
      secondCard: null
    });
  }

  unflipCards = () => {
    this.setState({
      lockBoard: true
    });

    setTimeout(() => {
      this.state.firstCard.classList.remove('flip');
      this.state.secondCard.classList.remove('flip');
      
      this.setState({
        lockBoard: false
      });
    }, 1500);
  }

  disableCards = () => {
    this.state.firstCard.setAttribute("disabled", "disabled");
    this.state.secondCard.setAttribute("disabled", "disabled");
  }

  checkMatch = () => {
    console.log(this.state.firstCard.dataset.name);
    console.log(this.state.secondCard.dataset.name);

    // A MATCH
    if (this.state.firstCard.dataset.name === this.state.secondCard.dataset.name) {
      console.log('match');
      this.disableCards();
      this.resetBoard();
      this.setState(state => ({
        matchCount: state.matchCount + 1
      }));

      return;
    } else {
      // no match
      console.log('no match')
      this.unflipCards();
    }

    this.setState({
      lockBoard: false
    });
  }

  // Public class fields syntax
  flipCard = event => {
    console.log(event.currentTarget, ' is the current card');
    const card = event.currentTarget;

    if (event.currentTarget === this.state.firstCard) {
      console.log(' this is the same card');
      return;
    }

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
    }, () => {
      this.checkMatch();
    });
  }

  checkGameStatus() {
    console.log(this.state.matchCount);
    if(this.state.matchCount === 12) {
      setTimeout(() => {
        alert('You win!');
      },1500);
    };
  }

  componentDidUpdate() {
    this.checkGameStatus();
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
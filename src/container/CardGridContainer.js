// CardGridContainer.js
import React, { Component } from 'react';
import Card from '../presentational/Card';

import alacran from '../images/alacran.jpg';

import './CardGridContainer.css';

// @TODO:
// 1. Create an array of 12 elements
// 2. Randomize order of array of objects
// 3. Render twice into card container
// 4. Use array length for number of matches required to win game

const cardSet = [
  {
    name: 'El Alacran',
    img: alacran,
  },
  {
    name: 'La Sandia',
    img: 'test'
  },
  {
    name: 'El Valiente',
    img: '',
  },
  {
    name: 'La Chalupa',
    img: ''
  }
];

const shuffleCardSet = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const sortedCards = shuffleCardSet(cardSet).concat(shuffleCardSet(cardSet));


class CardGridContainer extends Component {
  constructor(props) {
    super(props);

    console.log(this, 'rendered Component');

    this.state = {
      cards: sortedCards,
      status: 'unsolved',
      message: 'Game Start',
      cardFlipped: false,
      firstCard: null,
      secondCard: null,
      lockBoard: false,
      matchCount: 0
    }
  }

  resetBoard = () => {
    console.log('board reset');
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
      const state = this.state;

      if(state.firstCard) {
        state.firstCard.classList.remove('flip');
      }

      if(state.secondCard) {
        state.secondCard.classList.remove('flip');
      }

      this.resetBoard();
    }, 1500);
  }

  disableCards = () => {
    this.state.firstCard.setAttribute("disabled", "disabled");
    this.state.secondCard.setAttribute("disabled", "disabled");
  }

  checkMatch = () => {
    // A MATCH
    if (this.state.firstCard.dataset.name === this.state.secondCard.dataset.name) {
      this.disableCards();
      this.resetBoard();

      this.setState(state => ({
        matchCount: state.matchCount + 1,
        message: 'Matched!'
      }));

      this.unflipCards();
      return;

    // NO MATCH
    } else {
      this.unflipCards();

      this.setState(state => ({
        message: 'No Match'
      }));
    }
  }

  // Public class fields syntax
  flipCard = event => {
    const card = event.currentTarget;

    // Same Card chosen
    if (event.currentTarget === this.state.firstCard) {
      this.setState(state => ({
        message: 'Same Card Chosen'
      }));
      return;
    }

    // board locked..
    if (this.state.lockBoard) {
      this.setState(state => ({
        message: 'Board locked...'
      }));
      return;
    }

    // Cards already chosen
    if (card.attributes.disabled) {
      this.setState(state => ({
        message: 'Card has already been matched!'
      }));
      return;
    }

    // ADD FLIP CLASS
    event.currentTarget.classList.add('flip');

    // Initial FLIP not done
    if (!this.state.cardFlipped) {
      this.setState({
        cardFlipped: true,
        firstCard: card
      });
      return;
    }

    // CHECK SECOND CARD
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
    console.log(this.state);
    this.checkGameStatus();
  }

  render() {
    // Shuffle cardSet and place into two arrays that are combined and rendered below

    console.log( sortedCards , ' are the sortedCards');

    return (
      <div className="div">
        <h2 className="CardGridContainer__header">Game Status: { this.state.message ? this.state.message : null }</h2>
        <div className="CardGridContainer">
          

          {/*
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
          */}
        </div>
      </div>
    );
  }
}

export default CardGridContainer;
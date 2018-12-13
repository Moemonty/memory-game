import React, { Component } from 'react';
import Card from '../presentational/Card';

import './CardGridContainer.css';
import loteriaCard from '../images/loteriaCard.jpg';

class CardGridContainer extends Component {
  constructor(props) {
    const { cardSet } = props;
    super(props);

    this.state = {
      cardBack: loteriaCard,
      cards: this.shuffledCards(cardSet),
      gameWon: false,
      message: 'Game Start',
      cardFlipped: false,
      firstCard: null,
      secondCard: null,
      lockBoard: false,
      matchCount: 0
    }
  }

  // Known Shuffle Algo
shuffleCardSet (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

shuffledCards (cardSet) {
  console.log(this);
  // concat the same cardset to double array
  const pairedCards = cardSet.concat(cardSet);
  // shuffle cards
  return this.shuffleCardSet(pairedCards);
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
      }), () => {
        this.checkGameStatus();
      });

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
    if(this.state.matchCount === (this.state.cards.length / 2)) {
      this.setState(state => ({
        message: 'You win!',
        gameWon: true,
      }));
    }
  }

  resetGame() {
    // shuffle cards
    this.unflipCards();
    // remove all disabled attributes

    // @TODO: Use some other attribute to determine
    // whether or not element is clickable..
    // remove all disabled attributes
    document.querySelectorAll('.card').forEach((card) => {
      card.removeAttribute('disabled');
      card.classList.remove('flip');
    });

    // Create new set of ordered cards and set state to start
    const cards = this.shuffledCards();
    this.setState(state => ({
      cards: cards,
      message: 'Game Start',
      cardFlipped: false,
      firstCard: null,
      secondCard: null,
      lockBoard: false,
      matchCount: 0
    }));
  }

  render() {
    return (
      <div className="div">
        <h2 className="CardGridContainer__header">Game Status: { this.state.message ? this.state.message : null }</h2>
        <h3 className="CardGridContainer__header">Match Count: { this.state.matchCount >= 0 ? this.state.matchCount : null }</h3>
        <button className="CardGridContainer__reset" onClick={this.resetGame.bind(this)}>Reset Game</button>
        <div className="CardGridContainer">
          { this.state.cards.map((card, index) => {
            return <Card key={index} cardBack={this.state.cardBack} name={card.name} img={card.img} onCardFlip={ this.flipCard } />
          })}
        </div>
      </div>
    );
  }
}

export default CardGridContainer;
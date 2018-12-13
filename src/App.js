import React, { Component } from 'react';
import CardGridContainer from './container/CardGridContainer';
import './App.css';

import alacran from     './images/alacran.jpg';
import pajaro from      './images/pajaro.jpg';
import luna from        './images/luna.jpg';
import umbrella from    './images/umbrella.jpg';
import corona from      './images/corona.jpg';
import chalupa from     './images/chalupa.jpg';
import bandera from     './images/bandera.jpg';
import catrin from      './images/catrin.jpg';
import nopal from       './images/nopal.jpg';
import rosa from        './images/rosa.jpg';
import bota from        './images/bota.jpg';
import sol from         './images/sol.jpg';

const cardSet = [
  {
    name: 'The Scorpion',
    img: alacran,
  },
  {
    name: 'The Bird',
    img: pajaro
  },
  {
    name: 'The Moon',
    img: luna,
  },
  {
    name: 'Umbrella',
    img: umbrella
  },
  {
    name: 'Crown',
    img: corona
  },
  {
    name: 'Chalupa',
    img: chalupa
  },
  {
    name: 'Flag',
    img: bandera
  },
  {
    name: 'Gentleman',
    img: catrin
  },
  {
    name: 'Cactus',
    img: nopal
  },
  {
    name: 'Rose',
    img: rosa
  },
  {
    name: 'Boot',
    img: bota
  },
  {
    name: 'The Sun',
    img: sol
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-header">Memory Game</h1>
        </header>
        <CardGridContainer cardSet={cardSet} />
      </div>
    );
  }
}

export default App;

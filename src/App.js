import React, { Component } from 'react';
import CardGridContainer from './container/CardGridContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Memory Game
          </h1>
        </header>
        <CardGridContainer />
      </div>
    );
  }
}

export default App;

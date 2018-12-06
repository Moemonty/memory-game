import React, { Component } from 'react';
import CardGridContainer from './container/CardGridContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            Memory Game
          </p>


          <CardGridContainer />

        </header>
      </div>
    );
  }
}

export default App;

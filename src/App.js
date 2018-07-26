import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import CubCard from "./components/CubCard";
import './App.css';



class App extends Component {

  //setting state
  state = {
    correctGuesses: 0,
    bestScore: 0,
    cards: cards,
    unselectedCards: cards
  };
  
  //randomize the placement of cards
  shuffleCards = array => {
    for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <CubCard />
      </div>
    );
  }
}

export default App;

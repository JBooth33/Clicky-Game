import React, {Component} from 'react';
import cards from "./cards.json";
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
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  //handles when user chooses a card
  chooseCard = id => {
    const pickedCard = this.state.unselectedCards.find(card => card.id === id);

    if (pickedCard === undefined) {
      this.setState({
        correctGuesses: 0,
        bestScore: (this.state.correctGuesses > this.state.bestScore) ? this.state.correctGuesses : this.state.bestScore,
        cards: cards,
        unselectedCards: cards
      });
    } else {

      const newCards = this.state.unselectedCards.filter(card => card.id !== id);

      this.setState({
        correctGuesses: this.state.correctGuesses + 1,
        cards: cards,
        unselectedCards: newCards
      });
    }

    this.shuffleCards(cards);
  }
  
    render() {
      return ( 
        <div className = "App" >
          <Navbar 
            correctGuesses={this.state.correctGuesses}
            bestScore={this.state.correctGuesses}
          />
          <Jumbotron />
          <Wrapper>
          {this.state.cards.map(card => (
              <CubCard 
                id={card.id}
                image={card.image}
                chosenCard={this.chooseCard}
                correctGuesses={this.state.correctGuesses}
              />
            ))}
          </Wrapper>
        </div>
      );
    }
  }

  export default App;
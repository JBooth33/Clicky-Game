import React, {Component} from 'react';
import cards from "./cards.json";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import CubCard from "./components/CubCard";
import './App.css';

class App extends Component {

  //setting state
  state = {
    chosenCards: [],
    score: 0,
    bestScore: 0,
    message: "Click an image to begin."
  };

  
  //handles when user chooses a card
  chooseCard = card => {
    let chosenCards = this.state.chosenCards;
    let score = this.state.score;
    //if card was already chosen
    if (chosenCards[card.id]) {
      this.setState({
        message: "You lose!",
        bestScore: Math.max(this.state.score, this.state.bestScore),
        chosenCards: [],
        score: 0
      })
      //if card has not yet been chosen
    } else {
      chosenCards[card.id] = true;
      this.setState({
        message: "Lucky guess!",
        chosenCards: chosenCards,
        score: ++score
      })
    }
  };

  //render page
    render() {
      return ( 
        <div className = "App" >
          <Jumbotron 
            message={this.state.message}
            score={this.state.score}
            bestScore={this.state.bestScore}
          />
          <Wrapper>
            {cards.sort((addEventListener,b) => 0.5 - Math.random()).map(randomCard => (
              <CubCard
                chooseCard={this.chooseCard}
                id={randomCard.id}
                key={randomCard.id}
                image={randomCard.image}
              />
            ))}
          </Wrapper>
        </div>
      );
    }
  }

  export default App;
import React, { Component } from "react";
import CharCard from "./components/CharCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters: characters,
    pickedChars: [],
    topScore: 0,
    alertMessage: ""
  };

  handlePicked = event => {

    const name = event.target.attributes.getNamedItem("name").value;
    this.shuffleCharacters()
    this.checkGuess(name, this.updateTopScore)
  }

  shuffleCharacters = () => {
    this.setState(this.state.characters = this.shuffleArray(this.state.characters))
  }

  shuffleArray = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  checkGuess = (name, cb) => {
    const newState = { ...this.state };
    if (newState.pickedChars.includes(name)) {
      newState.alertMessage = `YOU ALREADY PICKED "${name.toUpperCase()}"!`
      newState.pickedChars = []
      this.setState(this.state = newState)
    } else {
      newState.pickedChars.push(name)
      newState.alertMessage = `GOOD CHOICE!`
      this.setState(this.state = newState)
    }
    cb(newState, this.alertWinner)
  }

  updateTopScore = (newState, cb) => {
    if (newState.pickedChars.length > newState.topScore) {
      newState.topScore++
      this.setState(this.state = newState)
    }
    cb(newState)
  }

  alertWinner = (newState) => {
    if (newState.pickedChars.length === 12) {
      newState.alertMessage = "CHAMPION!";
      newState.pickedChars = [];
      this.setState(this.state = newState)
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Characters List</Title>
        {this.state.characters.map(char => (
          <CharCard
            // removeFriend={this.removeFriend}
            id={char.id}
            key={char.id}
            name={char.name}
            image={char.image}
            occupation={char.occupation}
            location={char.location}
            handlePicked={this.handlePicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import ValidationComponent  from './ValidationComponent'
import CharComponent from './CharComponent'

class App extends Component {
  state = {
    userInput: ""
  }


  inputChangeHangler = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }


  render() {

    const charList = this.state.userInput.split('').map(oneLetter => {
      return <CharComponent letter={oneLetter} />
    })

    return (
      <div className="App">
        <p>Hi</p>
        <input type="text"
          onChange={this.inputChangeHangler}
          value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <ValidationComponent
          userInputLenght={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;

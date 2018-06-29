import React, { Component } from 'react';
import './App.css';
import ValidationComponent  from './ValidationComponent'
import CharComponent from './CharComponent'

class App extends Component {
  state = {
    userInput: ""
  }

  inputChangeHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

deleteCharHandler = (index) => {
  const text = this.state.userInput.split('')
  text.splice(index, 1)
  const updatedText = text.join('')
  this.setState({userInput: updatedText})
}

  render() {

    const charList = this.state.userInput.split('').map((oneLetter, index) => {
      return <CharComponent
        letter={oneLetter}
        key={index}
        clicked={() => this.deleteCharHandler(index)}/>
    })

    return (
      <div className="App">
        <p>Hi</p>
        <input type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <ValidationComponent
          userInputLenght={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;

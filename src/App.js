import React, { Component } from 'react';
import './App.css';
import ValidationComponent  from './ValidationComponent'

class App extends Component {
  state = {
    sentence: ""
  }
changeTextHangler = (event) => {
  this.setState({
    sentence: event.target.value
  })
}

  render() {
    return (
      <div className="App">
      <p>Hi</p>
      <input type="text" onChange={this.changeTextHangler}/>
      <p>{this.state.sentence}</p>
      <ValidationComponent sentenceLenght={this.state.sentence.length} />
      </div>
    );
  }
}

export default App;

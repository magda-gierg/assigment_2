import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    sentence: ""
  }
sentenceHangler = (event) => {
  this.setState({
    sentence: event.target.value
  })
}

  render() {
    return (
      <div className="App">
      <p>Hi</p>
      <input type="text" onChange={this.sentenceHangler}/>
      <p>{this.state.sentence}</p>
      </div>
    );
  }
}

export default App;

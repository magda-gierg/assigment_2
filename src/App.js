import React, { Component } from 'react';
import './App.css';
import ComponentValidation from './ComponentValidation'

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
      <ComponentValidation />
      </div>
    );
  }
}

export default App;

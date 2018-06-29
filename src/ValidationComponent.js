import React, { Component } from 'react';

const ValidationComponent = (props) => {

    return (
      <div className="App">
      {
        (props.sentenceLenght < 5) ?
        <p>"text too short"</p> :
        <p>"text long enought"</p>
      }
      </div>
    )
  }



export default ValidationComponent

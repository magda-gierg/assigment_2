import React, { Component } from 'react';

const CharComponent = (props) => {

return (
  <div className="Char" onClick={props.clicked}>
  {props.letter}
  </div>
)

}

export default CharComponent

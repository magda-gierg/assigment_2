import React, { Component } from 'react';

const ValidationComponent = (props) => {

let validationMessage = "text long enought"
if (props.userInputLenght <= 5) {
  validationMessage = "text too short"
}
return (
  <div>
    <p>{validationMessage}</p>
  </div>
)

    // return (
    //   <div>
    //   {
    //     (props.userInputLenght < 5) ?
    //     <p>"text too short"</p> :
    //     <p>"text long enought"</p>
    //   }
    //   </div>
    // )
  }



export default ValidationComponent

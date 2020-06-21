import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';


const StartContainer = (props) => {

  return (
    <Fragment>

    <h1>Dwarves Of Kurak</h1>
    <p>Select Game Mode: </p>
    <button><Link to="/party-select" onClick={props.onClickGameModeHandler(1)}>Single Fight</Link></button>
    <button>Single Level</button>
    <button>Campaign Mode</button>
    </Fragment>
  )



}
export default StartContainer;

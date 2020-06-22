import React from 'react';
import {browserHistory, Redirect} from 'react-router-dom';
import PartySelectContainer from './PartySelectContainer.jsx';
import CharacterContainer from './CharacterContainer.js';

const StartContainer = (props) => {

    function onNavigateFight(gameMode){

        return <Redirect to="/party"/>
    }


  return (
    <div>

        <h1>Dwarves Of Kurak</h1>
        <p>Select Game Mode: </p>
        <button onClick={()=>onNavigateFight(1)}>Single Fight</button>
        <hr />
        <button onClick={()=>onNavigateFight(2)}>Single Level</button>
        <hr />
        <button onClick={()=>onNavigateFight(3)}>Campaign Mode</button>
    </div>
  )



}
export default StartContainer;

import React, { Component } from 'react';
import Character from '../components/characters/Character.js';
import CharacterContainer from './CharacterContainer.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class GameContainer extends Component{
  constructor(props){
    super(props);
  }



render(){
  return (
    <div>
    <Character />
    <CharacterContainer/>
    <h2>Game stuff</h2>
    </div>
  )
}

}
export default GameContainer;

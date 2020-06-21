import React, { Component } from 'react';
import Character from '../components/characters/Character.js';
import CharacterContainer from './CharacterContainer.js';
import Monster from '../components/monsters/Monster.js';
import MonsterContainer from './MonsterContainer.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class GameContainer extends Component{
  constructor(props){
    super(props);
  }



render(){
  return (
    <div>
    <h1>Character Stuff</h1>
    <CharacterContainer/>
    <h2>Monster Stuff</h2>
    <MonsterContainer/>
    </div>
  )
}

}
export default GameContainer;

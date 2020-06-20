import React, { Component } from 'react';
import Character from '../components/characters/Character.js';
import CharacterContainer from './CharacterContainer.js';


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

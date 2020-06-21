import React, { Component } from 'react';
import CharacterContainer from './CharacterContainer.js';
import MonsterContainer from './MonsterContainer.js';
import ItemContainer from './ItemContainer.js';


class GameContainer extends Component{
  constructor(props){
    super(props);
  }



render(){
  return (
    <div>
    <h2>Character Stuff</h2>
    <CharacterContainer/>
    <h2>Monster Stuff</h2>
    <MonsterContainer/>
    <h2>Item Stuff</h2>
    <ItemContainer/>
    </div>
  )
}

}
export default GameContainer;

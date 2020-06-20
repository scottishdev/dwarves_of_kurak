import React, { Component } from 'react';
import Character from '../components/Character.js'


class GameContainer extends Component{
  constructor(props){
    super(props);
  }



render(){
  return (
    <div>
    <Character />
    <h2>Game stuff</h2>

    </div>
  )
}

}
export default GameContainer;

import React, { Component} from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';

class App extends Component {
  render(){
  return (
    <div className="whole_game_wrapper">
    <h1 className="game_title">The Annals:Dwarves Of Dark Kurak</h1>
    <MainContainer />
    </div>
  );
  }
}

export default App;

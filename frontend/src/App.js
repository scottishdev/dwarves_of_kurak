import React, { Component} from 'react';
import './App.css';
import Main from './containers/Main';

class App extends Component {
  render(){
  return (
    <div className="whole_game_wrapper">
    <h1 className="game_title">The Annals:Dwarves Of Dark Kurak</h1>
    <Main />
    <audio controls loop autoPlay>
        <source src="OurMountain.mp3" type="audio/mpeg" loop="loop"/>
    </audio>
    </div>
  );
  }
}

export default App;

import React, { Component} from 'react';
import GameContainer from './containers/GameContainer';
import './App.css';

class App extends Component {
  render(){
  return (
    <div>
    <GameContainer />
    <h1>App start</h1>
    </div>
  );
  }
}

export default App;

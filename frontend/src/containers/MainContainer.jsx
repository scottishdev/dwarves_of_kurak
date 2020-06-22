import React, {Component, Fragment} from 'react';
import StartContainer from './StartContainer';
import PartySelectContainer from './PartySelectContainer';
import CharacterContainer from './CharacterContainer';

class MainContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
        gameMode: null,
        party:null,
        characterAssets: null,
        itemAssets: null,
        skillAssets: null
        }
    this.clickHandler = this.clickHandler.bind(this);
    this.partySelect = this.partySelect.bind(this);
    }

  clickHandler(gameMode) {
    this.setState({gameMode:gameMode})
  }

  partySelect(partysetting){
      this.setState({party:partysetting})
  }

render() {

    if(this.state.gameMode == null){
    return (
        <div className="game_selector">
            <button className="game_start_options" onClick={()=>this.clickHandler(1)}>Fight</button>
            <button className="game_start_options" onClick={()=>this.clickHandler(2)}>Consecutive Fight</button>
            <button className="game_start_options" onClick={()=>this.clickHandler(3)}>Dungeon Crawler</button>
        </div>)
    } else{
        return (
        <div className="game_selector">
            <PartySelectContainer />
        </div>)
    }
  }

}

export default MainContainer;

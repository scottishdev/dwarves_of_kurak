import React, {Component} from 'react';
import PartySelectContainer from './PartySelectContainer';
import Request from '../helpers/request';

class MainContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            gameMode: null,
            party:null,
            characterAssets: null,
            itemAssets: null,
            skillAssets: null,
            jobassets:null
        }
    this.clickHandler = this.clickHandler.bind(this);
    }

  clickHandler(gameMode) {
    this.setState({gameMode:gameMode})
  }

  componentDidMount() {
    const request = new Request();

    request.get('characters')
    .then(data => this.setState({characterAssets:data}))

    request.get('items')
    .then(data => this.setState({itemAssets:data}))

    request.get('skills')
    .then(data=> this.setState({skillAssets:data}))

    request.get('jobs')
    .then(data=> this.setState({jobAssets:data}))
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
            <PartySelectContainer characterAssets={this.state.characterAssets} />
        </div>)
    }
  }

}

export default MainContainer;

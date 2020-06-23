import React, {Component} from 'react';
import PartySelectContainer from './PartySelectContainer';
import Request from '../helpers/request';
import StartContainer from './StartContainer';

class MainContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            gameMode: null,
            party:null,
            
            characterAssets: null,
            itemAssets: null,
            skillAssets: null,
            jobAssets:null,
            monsterAssets:null
        }
    this.startClickHandler = this.startClickHandler.bind(this);
    this.setParty = this.setParty.bind(this);
    }

    startClickHandler(gameMode) {
        console.log("setting game mode to: "+ gameMode);
        this.setState({gameMode:gameMode})
    }

    setParty(event){
        console.log("setting Party members");
        this.setState({party:event})
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

        request.get('monsters')
        .then(data=> this.setState({monsterAssets:data}))
    }

    render() {

        if(this.state.gameMode == null){
            return (<StartContainer  onClickHandler={this.startClickHandler}/>)
            }   else{
                return (
                <div className="game_selector">
                    <PartySelectContainer characterAssets={this.state.characterAssets} setPartyHandler={this.setParty}/>
                </div>)
        }
    }

}

export default MainContainer;

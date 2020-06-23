import React, {Component} from 'react';
import Request from '../helpers/request';
import Start from '../components/Start';
import PartySelect from './PartySelect';
import Game from './Game';


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

    setParty(){
        console.log("setting Party members");
        this.setState({party:1})
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
        {console.log("rendering main Container")}
                    
        if(this.state.gameMode == null){
            return (<Start  onClickHandler={this.startClickHandler}/>)
            }
        else if (this.state.party == null){
                return (
                <div className="game_selector">
                     <PartySelect characterAssets={this.state.characterAssets} setPartyHandler={this.setParty}/>
                </div>)
        }
        else{
            return(
                <Game />
            )
        }
    }

}

export default MainContainer;

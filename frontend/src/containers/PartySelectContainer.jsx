import React, {Component} from 'react';
import PartyCharacterSelect from './PartyCharacterSelect';
import Request from '../helpers/request';
class PartySelectContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            characters:null,
            selectedCharacterOne:null,
            selectedCharacterTwo:null,
            selectedCharacterThree:null
        }
        this.handlePartyChangeOne = this.handlePartyChangeOne.bind(this);
        this.handlePartyChangeTwo = this.handlePartyChangeTwo.bind(this);
        this.handlePartyChangeThree = this.handlePartyChangeThree.bind(this);
      }

    handlePartyChangeOne(id){
        const char = this.state.characters.find(character=>character.id == id);
            this.setState({selectedCharacterOne:char})
        }

    handlePartyChangeTwo(id){
        const character = this.state.characters.find(char=>char.id == id)
            this.setState({selectedCharacterTwo:character})
    }

    handlePartyChangeThree(id){
        const character = this.state.characters.find(char=>char.id == id)
            this.setState({selectedCharacterThree:character})
    }

    componentDidMount() {
        const request = new Request();

        request.get('/characters')
        .then(data => this.setState({characters:data}))
    }


    render(){
        if(!this.state.selectedCharacterOne||!this.state.selectedCharacterTwo||!this.state.selectedCharacterThree){
        return (
            <div className="party_setup">
                <div className="page_heading">
                    <h3>Party Setup</h3>
                </div>
                <div className="party_character_boxes">
                <PartyCharacterSelect characters={this.state.characters} character={this.state.selectedCharacterOne} onHandleChange={this.handlePartyChangeOne}/>
                <PartyCharacterSelect characters={this.state.characters} character={this.state.selectedCharacterTwo}  onHandleChange={this.handlePartyChangeTwo} />
                <PartyCharacterSelect characters={this.state.characters} character={this.state.selectedCharacterThree}  onHandleChange={this.handlePartyChangeThree}/>
                </div>
            </div>
            )
        } else{
            return(
                <div className="party_setup">
                    party selected
                </div>
            )
        }
    }

}

export default PartySelectContainer;

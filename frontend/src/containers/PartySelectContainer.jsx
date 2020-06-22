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
          const character = this.state.characters.find(char=>char.id === id)
          switch(key){
                case 1:
                    this.setState({selectedCharacterOne:character})
                    break
                case 2:
                    this.setState({selectedCharacterTwo:character})
                    break
                case 3:
                    this.setState({selectedCharacterThree:character})
                    break
          }
        }
        handlePartyChangeTwo(id){
            const character = this.state.characters.find(char=>char.id === id)
            switch(key){
                  case 1:
                      this.setState({selectedCharacterOne:character})
                      break
                  case 2:
                      this.setState({selectedCharacterTwo:character})
                      break
                  case 3:
                      this.setState({selectedCharacterThree:character})
                      break
            }
          
  
        }
        handlePartyChangeThree(id){
            const character = this.state.characters.find(char=>char.id === id)
            switch(key){
                  case 1:
                      this.setState({selectedCharacterOne:character})
                      break
                  case 2:
                      this.setState({selectedCharacterTwo:character})
                      break
                  case 3:
                      this.setState({selectedCharacterThree:character})
                      break
            }
          
  
        }
    
  componentDidMount() {
    const request = new Request();

    request.get('/characters')
    .then(data => this.setState({characters:data}))
  }
    

render(){
      return (
        <div className="party_setup">
            <div className="page_heading">
                <h3>Party Setup</h3>
            </div>
            <div className="party_character_boxes">
            <PartyCharacterSelect characters={this.state.characters} onHandleChange={this.handlePartyChangeOne}/>
            <PartyCharacterSelect characters={this.state.characters} onHandleChange={this.handlePartyChangeTwo} />
            <PartyCharacterSelect characters={this.state.characters} onHandleChange={this.handlePartyChangeThree}/>
            </div>
        </div>
    )
      }
}

export default PartySelectContainer;

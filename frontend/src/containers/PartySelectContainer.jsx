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
            <PartyCharacterSelect characters={this.characters} />
            <PartyCharacterSelect characters={this.characters} />
            <PartyCharacterSelect characters={this.characters} />
            
            </div>
        </div>
    )
      }
}

export default PartySelectContainer;

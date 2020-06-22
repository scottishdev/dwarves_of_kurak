import React, {Component} from 'react';
import PartyCharacterSelect from './PartyCharacterSelect';
import request from '../helpers/request';
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
    request.get('/characters')
    .then(data => this.setState({characters:data}))
  }

render(){
      return (
        <div>
            PartySetup
            <PartyCharacterSelect characters={this.characters}/>
            <PartyCharacterSelect characters={this.characters} />
            <PartyCharacterSelect characters={this.characters} />
        </div>
    )
      }
}

export default PartySelectContainer;

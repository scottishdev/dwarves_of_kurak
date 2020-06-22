import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CharacterList from '../components/characters/CharacterList';
import Request from '../helpers/request.js';
import CharacterForm from '../components/characters/CharacterForm';

class CharacterContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      characters: []
    }
    this.handleCreationSubmit = this.handleCreationSubmit.bind(this);
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/characters')
    .then(data => this.setState({characters: data}))
  }

  handleCreationSubmit(newCharacter){
        return fetch('http://localhost:3000/api/characters',
           {
                method: 'POST',
                body: JSON.stringify(newCharacter),
                headers: { 'Content-Type': 'application/json' }
           })
           .then(res => res.json())

    newCharacter.id = Date.now()
    const updatedCharacters = [...this.state.characters, newCharacter]
    this.setState({
      characters: updatedCharacters
    })
  }

  render(){
    return(
      <Router>
         <Fragment>
           <Switch><div>
           <h4>Create Character</h4>
           <CharacterForm onCharacterSubmit={this.handleCreationSubmit}/>
             <Route render={(props) => {
               return <CharacterList characters={this.state.characters}/>
             }}/>
             </div>
           </Switch>
         </Fragment>
       </Router>
    )
  }


}

export default CharacterContainer;

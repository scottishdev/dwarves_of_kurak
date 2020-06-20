import React, {Component, Fragment} from 'react';
import Character from '../components/characters/Character';
import CharacterList from '../components/characters/CharacterList';
import Request from '../helpers/request.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class CharacterContainer extends Component{
  constructor(props){
    super(props);
    this.state ={
      characters: []
    }
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/characters')
    .then(data => this.setState({characters: data}))
  }

  render(){
    return(
      <Router>
        <Fragment>
          <Switch>
            <div>
            <Route render={(props) => {
              return <CharacterList characters={this.state.characters}/>
            }}/>
            <p>Test test </p>
            </div>
          </Switch>
        </Fragment>
      </Router>
    )
  }


}

export default CharacterContainer;

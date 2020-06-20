import React, {Component, Fragment} from 'react';
import Character from '../components/characters/Character';
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
            <Route render={(props) => {
              return <Character characters={this.state.characters}/>
            }}/>
            <p>characters links to be added here</p>
          </Switch>
        </Fragment>
      </Router>
    )
  }


}

export default CharacterContainer;

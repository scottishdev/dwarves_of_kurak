import React, {Component, Fragment} from 'react';
import Character from '../components/characters/Character';

class CharacterContainer extends Component{
  constructor(props){
    super(props);
    this.state ={
      characters: []
    }
  }

  // componentDidMount(){
  //   const request = new Request();
  //
  //   request.get('/api/characters')
  //   .then(data => this.setState({characters: data}))
  // }

  render(){
    return(
      <Fragment>
      <p>links will go here</p>
      </Fragment>
    )
  }


}

export default CharacterContainer;

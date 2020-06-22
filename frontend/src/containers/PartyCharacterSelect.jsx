import React, {Component, Fragment} from 'react';
import Character from '../components/characters/Character';

class PartyScreenContainer extends Component{
  constructor(props){
    super(props);
  }



render(){
  return (
    <Fragment>
    <button>Back</button>

    <label>Enter Party Name:
    <input type="text" id="pname" name="pname" value="" />
    </label>
    <p><Character></Character></p>

    </Fragment>
  )
}

}
export default PartyScreenContainer;

import React, {Component, Fragment} from 'react';
import Character from '../components/characters.js';
class PartyScreenContainer extends Component{
  constructor(props){
    super(props);
  }



render(){
  return (
    <Fragment>
    <button>Back</button>

    <label for="pname">Enter Party Name:</label>
    <input type="text" id="pname" name="pname" value="" />

    <p><Character></Character></p>

    </Fragment>
  )
}

}
export default PartyScreenContainer;

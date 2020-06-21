import React, {Component} from 'react';

class CharacterForm extends Component{

  constructor(props){
    super(props);
    this.state={
      name: ""
    }
  }


  render(){
    return(
      <form className="character-form">
        <input type="text"
        placeholder="Name"

        />
        <input type="submit" value="Save"/>
      </form>
    )
  }



}


export default CharacterForm;

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
        required
        />
            <label for="race">Choose a Race:</label>
            <select id="race" name="race">
              <option value="Dwarf">Dwarf</option>
              <option value="Human">Human</option>
            </select>

            <label for="job">Choose a Job:</label>
            <select id="job" name="job">
              <option value="job1">job1</option>
              <option value="job2">job2</option>
            </select>
        <input type="submit" value="Save"/>
      </form>
    )
  }



}


export default CharacterForm;

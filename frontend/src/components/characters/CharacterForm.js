import React, {Component} from 'react';

class CharacterForm extends Component{

  constructor(props){
    super(props);
    this.state={
      name: "",
      race: ""
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleRaceChange = this.handleRaceChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event){
    this.setState({name: event.target.value})
  }

  handleRaceChange(event){
    this.setState({race: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const name = this.state.name.trim();
    const race = this.state.race;
    if(!name || !race){
      return
    }

    const newCharacter ={
      name: name,
      race: race
    }

    this.props.onCharacterSubmit(newCharacter);

    this.setState({
      name: "",
      race: ""
    })

  }


  render(){
    return(
      <form className="character-form" onSubmit={this.handleSubmit}>
        <input type="text"
        placeholder="Name"
        value={this.state.name}
        onChange={this.handleNameChange}
        required
        />

        <label htmlFor="race">Choose a Race:</label>
        <select id="race" name="race" value={this.state.name} onChange={this.handleRaceChange}>
          <option value="Dwarf">Dwarf</option>
          <option value="Human">Human</option>
        </select>


        <input type="submit" value="Save"/>
      </form>
    )
  }



}


export default CharacterForm;

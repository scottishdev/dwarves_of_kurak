import React from 'react';

const CharSelect = (props) => {

  if(!props.characters) return null

  const options = props.characters.map((character, index) => {
    if (
      character.selectedDropdown === undefined || props.index === character.selectedDropdown
    ) {
      return (
        <option value={character.name} key={index}>
        {" "}
        {character.name}
        </option>
      );
    }
  });

  if(!props.character){
    return (
      <div className="party_character_select_box">
        <div>
        <select onChange={(id)=>props.onHandleChange(id.target.value)} defaultValue="default">
            <option disabled value="default">Choose a playable character</option>
            {options}
        </select>
      </div>
      </div>
    )
  } else{
    return (
        <div className="party_character_select_box">
            
            <div className="party_character_image">
               <img src={props.character.image} width="50px" height="50px"/>
            </div>
            
            <div className="party_character_text">
                Name: {props.character.name}<br />
                Race: {props.character.race}<br />
            </div>

            <div className="party_character_backstory">
                Backstory: {props.character.backStory}
            </div>

        </div>
    )
  }
}
export default CharSelect;

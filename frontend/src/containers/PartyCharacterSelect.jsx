import React from 'react';

const PartyScreenContainer = (props) => {

    if(!props.characters) return null
    
    
    const options = props.characters.map(character =>{
        return <option value={character.id}> {character.name}</option>
    })

  return (
    <div className="party_character_select_box">
        <p>characterBox</p>
        <select onChange={(id)=>props.onHandleChange(id,props.key)} defaultValue="default">
            <option disabled value="default">Choose a playable character</option>
            {options}
        </select>
    </div>
  )
}
export default PartyScreenContainer;

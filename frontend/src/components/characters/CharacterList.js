import React from 'react';
import Character from './Character.js';

const CharacterList = (props) =>{

  if( props.characters.length ===0){
    return ("Releasing Gas.....")
  }

  const allCharacters = props.characters.map((character, index) => {
    return(

        <div key={index}>
          <Character character={character} />
        </div>

    )
  })

return (
  <ul>
    {allCharacters}
  </ul>

  )
}

export default CharacterList;

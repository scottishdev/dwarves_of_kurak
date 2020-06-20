import React, {Fragment} from 'react';



const Character = (character) => {

  if(!character){
    return "no gas..."
  }
  return (
    <Fragment>
      <p>{character.name}</p>

    </Fragment>
  )

}

export default Character;

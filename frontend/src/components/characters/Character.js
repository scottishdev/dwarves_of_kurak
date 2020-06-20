import React, {Fragment} from 'react';



const Character = ({character}) => {

  if(!character){
    return "no gas..."
  }
  return (
    <Fragment>
      <p>{character.name}</p>
      <p>{character.backStory}</p>
      <p>{character.race}</p>
    </Fragment>
  )

}

export default Character;

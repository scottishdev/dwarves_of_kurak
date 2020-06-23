import React from 'react';



const Monster = ({monster}) => {

  if(!monster){
    return "no gas..."
  }
  return (
    <div className="game_screen_monster">
      <h3>Name:{monster.name}</h3>
      <p>Race:{monster.race}</p>
      <p>HP:{monster.hitPoints}</p>
      <p>MP:{monster.manaPoints}</p>
      <p>Strength:{monster.strength}</p>
      <p>Intelligence:{monster.intelligence}</p>
    </div>
  )

}

export default Monster;

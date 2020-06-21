import React from 'react';
import Monster from './Monster.js';

const MonsterList = (props) =>{

  if( props.monsters.length ===0){
    return ("Releasing Gas.....")
  }

  const allMonsters = props.monsters.map((monster, index) => {
    return(
      
        <div>
          <Monster monster={monster} />
        </div>

    )
  })

return (
  <ul>
    {allMonsters}
  </ul>

  )
}

export default MonsterList;

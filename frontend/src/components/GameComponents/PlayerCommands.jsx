import React from 'react';

const PlayerCommands = (props)=>{

return(
    <div className="game_screen_player_commands">
        <button onClick={()=>props.onAttackHandle()} >Attack</button>
    </div>
)
}

export default PlayerCommands;
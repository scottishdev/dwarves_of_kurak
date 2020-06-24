import React from 'react';

const BattleLog = ({battleLog})=>{

return(

    <div className="game_screen_log">
                    need a span array that posts the newest text here, maximum 5 lines<br />
                   {battleLog.log[0]}
                </div>
)

}

export default BattleLog
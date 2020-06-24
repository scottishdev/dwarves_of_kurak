import React from 'react';

const BattleLog = ({battleLog})=>{
    const battleLine = battleLog.log.map((text,index)=>{
            return (
                <div key={index}>{text} <br /></div>
            )
        })
    
return(

    <div className="game_screen_log">
        {battleLine}
    </div>
)

}

export default BattleLog
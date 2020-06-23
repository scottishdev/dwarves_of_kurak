import React from 'react';

const Character = (props) => {

    
    return (
        <div className="game_screen_player_stats">
           {props.character[0].characters[0].name}<br />
           Health: {props.character[0].characters[0].hitPoints}/100<br />
           Mana: {props.character[0].characters[0].manaPoints}/50
        </div>
    )

}

export default Character;

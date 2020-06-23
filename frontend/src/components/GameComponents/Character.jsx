import React from 'react';

const Character = ({character}) => {

    
    return (
        <div className="game_screen_player_stats">
           {character.name}<br />
           Health: {character.hitPoints}/100<br />
           Mana: {character.manaPoints}/50
        </div>
    )

}

export default Character;

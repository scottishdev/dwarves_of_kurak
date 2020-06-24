import React from 'react';

const Monster = ({monster}) => {

    return (
        <div className="game_screen_monster">
            <span>Name:{monster.name}</span><br />
            <span>Race:{monster.race}</span><br />
            <span>HP:{monster.hitPoints}</span><br />
            <span>MP:{monster.manaPoints}</span>


        </div>
    )

}

export default Monster;

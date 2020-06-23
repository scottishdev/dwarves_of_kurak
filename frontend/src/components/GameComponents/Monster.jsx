import React from 'react';

const Monster = (props) => {

    return (
        <div className="game_screen_monster">
            {console.log("show monster")}
            {console.log(props.monster[1])}
            <span>Name:{props.monster[1].name}</span><br />
            <span>Race:{props.monster[1].race}</span><br />
            <span>HP:{props.monster[1].hitPoints}</span><br />
            <span>MP:{props.monster[1].manaPoints}</span>

            
        </div>
    )

}

export default Monster;

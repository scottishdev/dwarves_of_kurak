import React, { useState, useEffect } from 'react';
import BattleLog from '../components/GameComponents/BattleLog';
import Monster from '../components/GameComponents/Monster';
import Character from '../components/GameComponents/Character';
import PlayerCommands from '../components/GameComponents/PlayerCommands';
import Request from '../helpers/request';

const Game = (props)=>{
    
    // function binds here
    const [monsters,setMonsters] = useState(null);
    const [character,setCharacter] = useState(null);
    const [battleLog,setBattleLog] = useState({log:[]});
    const request = new Request;

    // function creation here
    useEffect(()=>{
        getPost()
        getParty()
         
    },[])
    
    const getPost = ()=>{
        request.get('monsters')
        .then(data=>setMonsters(data[1]))
    }

    const getParty = ()=>{
        request.get('party')
        .then(data=>setCharacter(data[0].characters[0]))
    }

    function attack(){
        // const turn_one = "" + {character.name} + " attacks " + {monster.name} + " for " + {character.strength} + " damage."
        // const turn_two = "" + {monster.name} + " attacks " + {character.name} + " for " + {monster.strength} + " damage."
        // const updateMonster = monsters
        // const updateCharacter = character

        //logic => player attack minus monster hp and render update.
        //logic => wait 2 sec
        //log => monstername attacks player for # damage.
        //logic => monster attack minus player hp and render update.

       setBattleLog()
        
    }


    if(!character) return null
    return (
        <div className="game_screen">
            {console.log("rendering game")}
            <div className="game_screen_top">
                <BattleLog />
                <Monster monster={monsters}/>
                <div className="game_screen_sprites">
                    <img src={monsters.image} width="50px" height="50px"/>
                    <img src="http://localhost:8080/api/assets/gif?image=slime" width="25px" height="25px"/>
                    <img src="http://localhost:8080/api/assets/gif?image=slime" width="25px" height="25px"/>
                    <img src="http://localhost:8080/api/assets/gif?image=slime" width="50px" height="50px"/>
                    <img src="http://localhost:8080/api/assets/gif?image=slime" width="70px" height="70px" />
                    <img src="http://localhost:8080/api/assets/gif?image=slime" width="20px" height="20px" />
                    <img src="http://localhost:8080/api/assets/gif?image=slime" width="50px" height="50px"/>
                    <img src="http://localhost:8080/api/assets/gif?image=slime" width="100px" height="100px"/>
                </div>
            </div>
            <div className="game_screen_bottom">
                <Character character={character} />
                <PlayerCommands onAttackHandle={attack} />
                
                <div className="game_screen_minimap">
                    minimap goes here
                </div>
            </div>
        </div>
    )

}
export default Game;

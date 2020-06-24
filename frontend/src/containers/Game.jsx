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
    const [battleLog,setBattleLog] = useState({log:["Battle Log"]});
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
        console.log("updateBattleLog");
        const battleEvent2 = "battle log2"
        const turn_one = "" + character.name + " attacks " + monster.name + " for " + character.strength + " damage."
        damageMonster(character.strength)
        const turn_two = "" + monster.name + " attacks " + character.name + " for " + monster.strength + " damage."
        damagePlayer(monsters.strength)
        // const updateCharacter = character
        //logic => player attack minus monster hp and render update.
        //logic => wait 2 sec
        //log => monstername attacks player for # damage.
        //logic => monster attack minus player hp and render update.
        const newLog = updateBattleEvents(battleEvent)
        setBattleLog({log:newLog})
    }

    function updateBattleEvents(event){
        const log = battleLog.log
        if(log.length<5){
            log.push(event)
        } else{
            log.shift()
            log.push(event)
        }
        return log
    }

    function damagePlayer(dmg){
        const hp = character.hitPoints
        if(dmg < hp ){
            hp = hp - dmg
        } else{
            hp = 0
        }
        setCharacter({hitPoints:hp})
    }

    function damageMonster(dmg){
        const hp = monsters.hitPoints
        if(dmg < hp ){
            hp = hp - dmg
        } else{
            hp = 0
        }
        setMonsters({hitPoints:hp})
    }

    if(!monsters) return null
    if(!character) return null
    if(!battleLog === undefined) return null
    return (
        <div className="game_screen">
            {console.log("rendering game")}
            <div className="game_screen_top">
                <BattleLog battleLog={battleLog}/>
                <Monster monster={monsters}/>
                <div className="game_screen_sprites">
                <div className="game_screen_character_sprites">
                    <img src={character.image} width="100px" height="100px"/>
                </div>
                <div className="game_screen_monster_sprites">
                    <img src={monsters.image} width="100px" height="100px"/>
                </div>
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

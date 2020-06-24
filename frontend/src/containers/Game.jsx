import React, { useState, useEffect } from 'react';
import BattleLog from '../components/GameComponents/BattleLog';
import Monster from '../components/GameComponents/Monster';
import Character from '../components/GameComponents/Character';
import PlayerCommands from '../components/GameComponents/PlayerCommands';
import Request from '../helpers/request';

const Game = (props)=>{
    
    // function binds here
    const [enemy,setEnemy] = useState(null);
    const [player,setPlayer] = useState(null);
    const [battleLog,setBattleLog] = useState({log:["Battle Log"]});
    const request = new Request;

    // function creation here
    useEffect(()=>{
        getPost()
        getParty()
    },[])
    
    const getPost = ()=>{
        request.get('monsters')
        .then(data=>setEnemy({monster:data[1]}))
    }

    const getParty = ()=>{
        request.get('party')
        .then(data=>setPlayer({character:data[0].characters[0]}))
    }

    function attack(){
        console.log("updateBattleLog");
        
        if(player.character.hitPoints > 0){
            if(enemy.monster.hitPoints > 0){
                damageMonster(player.character.strength)
                const turn_one = "" + player.character.name + " attacks " + enemy.monster.name + " for " + player.character.strength + " damage."
                const newLog = updateBattleEvents(turn_one)
                setBattleLog({log:newLog})
            }
            else{
                const turn_one = "quit beating a dead horse"
                const newLog = updateBattleEvents(turn_one)
                setBattleLog({log:newLog})
            }
        }
        else{
            const turn_one = "Player is too dead to attack."
            const newLog = updateBattleEvents(turn_one)
            setBattleLog({log:newLog})
        }

        if(enemy.monster.hitPoints > 0){
            if(player.character.hitPoints > 0){
                damagePlayer(enemy.monster.strength)
                const turn_two = "" + enemy.monster.name + " attacks " + player.character.name + " for " + enemy.monster.strength + " damage."
                const newLog2 = updateBattleEvents(turn_two)
                setBattleLog({log:newLog2})
            }
            else{
                const turn_two = "monster chomps on the players corpse"
                const newLog2 = updateBattleEvents(turn_two)
                setBattleLog({log:newLog2})
            }
        }
        else{
            const turn_two = "Monster is too dead to retaliate"
            const newLog2 = updateBattleEvents(turn_two)
            setBattleLog({log:newLog2})
                
        }
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
        let hp = player.character.hitPoints
        if(dmg < hp ){
            hp = hp - dmg
        } else{
            hp = 0
        }
        let character = player.character
        character.hitPoints = hp
        setPlayer({character})
    }

    function damageMonster(dmg){
        let hp = enemy.monster.hitPoints
        if(dmg < hp ){
            hp = hp - dmg
        } else{
            hp = 0
        }
        let monster = enemy.monster
        monster.hitPoints = hp
        setEnemy({monster})
    }

    if(!enemy) return null
    if(!player) return null
    if(!battleLog === undefined) return null
    return (
        <div className="game_screen">
            {console.log("rendering game")}
            <div className="game_screen_top">
                <BattleLog battleLog={battleLog}/>
                <Monster monster={enemy.monster}/>
                <div className="game_screen_sprites">
                <div className="game_screen_character_sprites">
                    <img src={player.character.image} width="100px" height="100px"/>
                </div>
                <div className="game_screen_monster_sprites">
                    <img src={enemy.monster.image} width="100px" height="100px"/>
                </div>
                </div>
            </div>
            <div className="game_screen_bottom">
                <Character character={player.character} />
                <PlayerCommands onAttackHandle={attack} />
                
                <div className="game_screen_minimap">
                    minimap goes here
                </div>
            </div>
        </div>
    )

}
export default Game;

import React, { useState, useEffect } from 'react';
import BattleLog from '../components/GameComponents/BattleLog';
import Monster from '../components/GameComponents/Monster';
import Request from '../helpers/request';

const GameContainer =  (props)=>{
    
    // function binds here
    const [monster,setMonster] = useState();
    const request = new Request;

    // function creation here
    useEffect(()=>{
        getPost()

        
    },[])
    
    const getPost = ()=>{
        request.get('monsters')
        .then(data=>setMonster({Monster:data}))
    }

    if (!monster){
        return null;
    }
    else{
        return (
            <div className="game_screen">
                {console.log("rendering game")}
                <div className="game_screen_top">
                    <BattleLog />
                    <Monster monster={monster[0]}/>
                    <div className="game_screen_sprites">
                        <img src="http://localhost:8080/api/assets/gif?image=slime" width="50px" height="50px"/>
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
                    <div className="game_screen_player_stats">
                        player information
                    </div>
                    <div className="game_screen_player_commands">
                        player commands
                    </div>
                    <div className="game_screen_minimap">
                        minimap goes here
                    </div>
                </div>
            </div>
        )
    }    

}
export default GameContainer;

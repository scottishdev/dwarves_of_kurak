import React from 'react';

const GameContainer =  (props)=>{
    
    // function binds here

    

    // function creation here

    return (
        <div className="game_screen">
            {console.log("rendering game")}
            <div className="game_screen_top">
                <div className="game_screen_log">
                    monster uses an attack, you die instantly
                </div>
                <div className="game_screen_monster">
                    monster details go here
                </div>
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
export default GameContainer;

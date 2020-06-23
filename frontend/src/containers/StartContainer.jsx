import React from 'react';

const StartContainer = (props) => {

  return (
        <div className="game_selector">
            <button className="game_start_options" onClick={()=>props.onClickHandler(1)}>Fight</button>
            <button className="game_start_options" onClick={()=>props.onClickHandler(2)}>Consecutive Fight</button>
            <button className="game_start_options" onClick={()=>props.onClickHandler(3)}>Dungeon Crawler</button>
        </div>
    )

}
export default StartContainer;

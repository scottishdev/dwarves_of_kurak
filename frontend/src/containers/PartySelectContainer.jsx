import React, {Component} from 'react';
import PartyScreenContainer from './PartyScreenContainer';

const PartySelectContainer = (props) => {

      return (
        <div>
            <button className="game_start_options" onClick={()=>props.onClickListener(1)}> Create New Party </button>
            <button className="game_start_options" onClick={()=>props.onClickListener(2)}> Use Existing </button>
        </div>
    )
}

export default PartySelectContainer;

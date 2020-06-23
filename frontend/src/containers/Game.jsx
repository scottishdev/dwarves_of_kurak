import React, { Component } from 'react';

class GameContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            game:null
        }
    // function binds here

    }

    // function creation here

    render(){
        return (
            <div>
                //game renders here
                <p> game </p>
            </div>
        )
    }

}
export default GameContainer;

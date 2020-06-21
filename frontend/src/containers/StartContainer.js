import React, {Component, Fragment} from 'react';

class StartContainer extends Component{
  constructor(props){
    super(props);
  }



render(){
  return (
    <Fragment>
    <h1>Dwarves Of Kurak</h1>
    <p>Select Game Mode: </p>
    <button>Single Fight</button>
    <button>Single Level</button>
    <button>Campaign Mode</button>
    </Fragment>
  )
}

}
export default StartContainer;

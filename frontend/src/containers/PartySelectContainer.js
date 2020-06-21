import React, {Component, Fragment} from 'react';

class PartySelectContainer extends Component{
  constructor(props){
    super(props);
  }



render(){
  return (
    <Fragment>
    <button>Create New Party</button>
    <PartyScreenContainer />
    <button>Existing Party</button>
    </Fragment>
  )
}

}
export default PartySelectContainer;

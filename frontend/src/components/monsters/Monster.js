import React, {Fragment} from 'react';



const Monster = ({monster}) => {

  if(!monster){
    return "no gas..."
  }
  return (
    <Fragment>
      <p>Name:{monster.name}</p>
    </Fragment>
  )

}

export default Monster;

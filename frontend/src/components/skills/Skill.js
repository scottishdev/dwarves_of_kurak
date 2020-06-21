import React, {Fragment} from 'react';



const Skill = ({skill}) => {

  if(!skill){
    return "no gas..."
  }
  return (
    <Fragment>
      <h3>Name: {skill.name}</h3>
      <p>Damage: {skill.damage}</p>
      <p>SideEffect: {skill.sideEffect}</p>
    </Fragment>
  )

}

export default Skill;

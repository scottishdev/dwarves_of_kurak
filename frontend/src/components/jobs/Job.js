import React, {Fragment} from 'react';


const Job = ({job}) => {

  if(!job.character){return(
    <Fragment>
      <h2>Name: {job.name}</h2>
    <p>Held by: noone</p>
    </Fragment>)
}
  return (
    <Fragment>
      <h2>Name: {job.name}</h2>
      <p>Held By: {job.character.name}</p>
    </Fragment>
  )

}

export default Job;

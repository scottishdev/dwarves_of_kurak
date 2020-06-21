import React, {Fragment} from 'react';


const Item = ({item}) => {

  if(!item.character){return(
    <Fragment>
      <h2>Name:{item.name}</h2>
      <p>Buy:{item.buyCost}</p>
      <p>Sell:{item.sellCost}</p>
    <p>Held by: noone</p>
    </Fragment>)
}
  return (
    <Fragment>
      <h2>Name: {item.name}</h2>
      <p>Buy: {item.buyCost}</p>
      <p>Sell: {item.sellCost}</p>
      <p>Held By: {item.character.name}</p>
    </Fragment>
  )

}

export default Item;

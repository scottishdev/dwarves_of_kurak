import React, {Fragment} from 'react';


const Item = ({item}) => {

  if(!item){
    return "no gas..."
  }
  return (
    <Fragment>
      <h2>Name:{item.name}</h2>
      <p>Buy:{item.buyCost}</p>
      <p>Sell:{item.sellCost}</p>
    </Fragment>
  )

}

export default Item;

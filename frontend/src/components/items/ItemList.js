import React from 'react';
import Item from './Item.js';

const ItemList = (props) =>{

  if( props.items.length ===0){
    return ("Releasing Gas.....")
  }

  const allItems = props.items.map((item, index) => {
    return(

        <div>
          <Item item={item} />
        </div>

    )
  })

return (
  <ul>
    {allItems}
  </ul>

  )
}

export default ItemList;

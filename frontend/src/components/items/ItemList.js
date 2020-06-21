import React from 'react';
import Item from './Item.js';

const ItemList = (props) =>{

  if( !props.items){
    return ("Releasing Gas.....")
  }

  const allItems = props.items.map((item, index) => {
    return(

        <div key={index}>
          <Item  item={item} />
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

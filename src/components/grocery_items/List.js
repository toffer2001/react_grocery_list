import React from 'react';
import Item from './Item.js';
const List = ({items, checkOff}) => (
  <div>
    {
      items.map (item => <Item key={item.id} {...item} checkOff={checkOff} />)
    }
  </div>
)

export default List;
import React from 'react';

const styles = {
  item: {
    cursor: 'pointer',
  },
  purchased: {
    color: 'red',
    textDecoration: 'line-through'
  }
}

const Item = ({ id, name, purchased, checkOff }) => (
  <div>
    <div
      style={ purchased ? { ...styles.item, ...styles.purchased } : styles.item }
      onClick={() => checkOff(id)}>
      {name}
    </div>
  </div>
)

export default Item;
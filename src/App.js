import React, { Component } from 'react';
import List from './components/grocery_items/List.js';
import GroceryForm from './components/grocery_items/GroceryForm.js';

class App extends Component {
  state = { items: [
    {id: 1, name: "cereal", purchased: false, }, 
    {id: 2, name: "milk", purchased: true, }, 
    {id: 3, name: "avocados", purchased: false, }, 
  ]
};

renderItems = () => {
  const {items, } = this.state;
  return items.map( item => {
    return (
      item
    )
  })
};

  getUniqId = () => {
    // NOTE We are just using this as a helper function 
    // for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }


addItem = (name) => {
  const {items} = this.state
  const newItem = { id: this.getUniqId(), name, purchased: false}
  this.setState({ items: [newItem, ...items] })

}

checkOffItem = (id) => {
  const {items} = this.state
  this.setState({
    items: items.map( item => {
      if(item.id === id) {
        return {...item, purchased: !item.purchased}
      }
      return item
    })
  })
} 


  render() {
    const {items} = this.state
    return (
      <div>
        <h1 className="App-title">Grocery List</h1>
        <GroceryForm add={this.addItem} />
        <List items={this.renderItems()} checkOff={this.checkOffItem} />
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';

class GroceryForm extends Component {
  state = { name: ''}

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.add(this.state.name)
    this.setState({name: ''})
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          required
          placeholder='Add a new grocery item'
          label="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        

      </form>
    )
  }
}

export default GroceryForm;
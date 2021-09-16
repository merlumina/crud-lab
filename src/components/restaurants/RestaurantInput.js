import React, { Component } from 'react';

class RestaurantInput extends Component {

  constructor(props) {
    super()
    this.state = {
      text: ''
    }
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)}
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

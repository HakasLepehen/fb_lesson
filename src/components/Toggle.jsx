import React, { Component } from 'react'

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state);
    this.setState(prevState => ({
      isToggle: !prevState.isToggle,
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggle ? 'Включено' : 'Выключено'}
      </button>
    )
  }
}

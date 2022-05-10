import React, { Component } from 'react'

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.timerID = null;
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  
componentWillUnmount() {
  clearInterval(this.timerID);
}
  
  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>It's a { this.state.date.toLocaleTimeString() }</h2>
      </div>
    )
  }
}

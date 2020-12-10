// your Bomb code here!
import React, { Component } from "react";

class Bomb extends Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount,
    };
  }

  timerDispaly = () => {
    return this.state.secondsLeft === 0
      ? `Boom!`
      : `${this.state.secondsLeft} seconds left before I go boom!`;
  };

  render() {
    return <div>{this.timerDispaly()}</div>;
  }
}

export default Bomb;

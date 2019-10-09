import React from "react";
// import API from '../utils/API';

class Todo extends React.Component {
  state = {
    timeRemaining: this.props.time, // time remaining
    time: this.props.time, // original time
    isDone: false,
    isPaused: true,
    name: this.props.name
  };

  handleDelete() {}

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Todo;

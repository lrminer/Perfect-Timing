import React from "react";

class InputTodo extends React.Component {
  state = {
    title: "New Todo",
    time: 600
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  };



  onEnter() {}

  render() {
    return (
      <form className="d-flex flex-column align-items-center">
        <input name="title" value={this.state.title} onChange={this.handleInputChange} />
        <input name="time" value={this.state.time} onChange={this.handleInputChange} />
        <input type="button" value="submit" />
      </form>
    );
  }
}

export default InputTodo;

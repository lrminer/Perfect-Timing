import React from "react";
import Todo from "./components/Todo";
import InputTodo from "./components/InputTodo";
import "./App.css";

class App extends React.Component {
  state = {
    todos: []
  };

  handleSubmit() {
    // check valid time type
    
  }

  render() {
    return (
      <div className="App">
        <InputTodo onSubmit={this.handleSubmit} />
        <Todo name="hello" />
      </div>
    );
  }
}

export default App;

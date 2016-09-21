import React, { Component } from 'react';
import TodoList from "./TodoList";
import TodoCreator from "./TodoCreator";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{item: "sample",status: 0,}]
    };
  }

  onAdd (newTodo) {
    this.setState({
      todos : this.state.todos.concat({item: newTodo, status: 0})
    });
  }

  render() {
    return (
      <div className="todoApp">
        <TodoCreator setTodo={this.onAdd.bind(this)}/>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

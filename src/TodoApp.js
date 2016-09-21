import React, { Component } from 'react';
import TodoList from "./TodoList";
import TodoCreator from "./TodoCreator";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    alert("TodoApps_const");
    this.state = {
      todos: [{item: "sample",status: 0,}]
    };
  }

  onAdd (newTodo) {
alert("TodoApps_onAdd")
alert(newTodo)
alert("this.state")
alert(this.state)
    this.setState({
      todos : this.state.todos.concat({item: newTodo, status: 0})
    });
  }

  render() {
  alert("TodoApp_render")
  alert(this.state.todos)
    return (
      <div className="todoApp">
        <TodoCreator setTodo={this.onAdd.bind(this)}/>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

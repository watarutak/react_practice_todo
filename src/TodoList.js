import React, { Component } from 'react';

export default class TodoList extends Component {

  render () {
alert("TodoList_render")
    return (
      <u1>
      {
        this.props.todos.map(function(todo, i){
                    if (todo.status == 0) {return <li key={i}>{todo.item}</li>}
                    else {return <li><s>{todo.item}</s></li>}
                  })      }
      </u1>
    );
  }

}

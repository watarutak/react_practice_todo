import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class TodoCreator extends Component {
  constructor(props) {
    super(props);
    alert("TodoCreator_const");
  }

  _onAdd () {
    alert("TodoCreator__onAdd");
    var newTodo = ReactDOM.findDOMNode(this.refs.inputText).value;
    alert(newTodo);
    this.props.setTodo(newTodo);
  }

  render () {
alert("TodoCreator_render")
    return (
     <div className="TodoCreator">
        <input type="text" ref="inputText" placeholder="Input your new to do" />
        <button onClick={this._onAdd.bind(this)}>Add</button>
      </div>
    );
  }
}

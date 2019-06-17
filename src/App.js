import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      text: '',
      isClicked: false
    };
    this.deleteItem = this.deleteItem.bind(this)
  }

  onClick = () => {
    this.setState({
      isClicked: true,
      todos: this.state.todos.concat(this.state.text),
      text: ''
    });
  }

  deleteItem = (index) => {
    let newToDo = this.todos.splice(index, 1);
    this.setState({
      todos: newToDo
    })
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

 render() {
    return (
      <div className="App">
        <input value={this.state.text} onChange={this.onChange}/>
        <button onClick={this.onClick}>Button</button>
        {this.state.todos.map(function(value, index) {
          return (
            <div onClick={() => {this.deleteItem(index)}} key={index}>
              <p>{value}</p>
            </div>
          )
        })}
      </div>
    );
  }
}
export default App;

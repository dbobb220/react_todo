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
  }

  onClick = () => {
    this.setState({
      isClicked: true,
      todos: this.state.todos.concat(this.state.text),
      text: ''
    });
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
        {this.state.todos.map(function(value) {
          return (
            <p>{value}</p>
          )
        })}
      </div>
    );
  }
}
export default App;

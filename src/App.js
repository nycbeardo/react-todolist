import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';

class App extends Component {
  constructor() {
    super()
    this.sate = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
  handleInput = e => {
    console.log('Hello Input')
  }
  addItem = () => {
    console.log('Hello Add Item')
  }
  render() {
    return (
      <div className="App">
        <ToDoList addItem={this.addItem} />
      </div>
    )
  }
}

export default App;

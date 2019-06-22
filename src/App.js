
import React, { Component } from 'react';
import './App.css';
import List from './ToDoList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  deleteItem = (event) => {
    event.preventDefault();
    this.setState( {
      term:  '',
      items: [...this.state.items, this.state.term]

    });
  }

  render() 
  {
    return (
      <div>
      <h1>Task Planner</h1>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
          <button>Delete</button>
        </form>
        <List items={this.state.items} />

      </div>
    );
  }
}
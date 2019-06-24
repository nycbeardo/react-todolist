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

  deleteItem = ( event ) => {
        event.preventDefault();
        const { items } = this.state;
        const newItems = items.length > 0 ? items.slice(0, -1) : items
        this.setState({ items: newItems});
  }

  render() 
  
    {return (
      <div>
      <h1>Task Planner</h1>
      <p>Use the input box to take notes. Press submit to add to list. </p>
      <p> Press delete to get rid of previous entry.</p>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
          <button onClick={this.deleteItem}>Delete</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}
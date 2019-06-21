import React from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {
  return (
    <div className="App">
     <ToDoList/>
     <ToDoList addItem={this.addItem} />
    </div>
  );
}

export default App;

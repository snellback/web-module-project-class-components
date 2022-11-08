import React from 'react';
import Form from './Form';
import Todo from './Todo';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Todos:</h1>
        <ul>
          <li>Walk the dog</li>
          <li>Take out trash</li>
          <li>Workout</li>
        </ul>

        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    )
  }
}

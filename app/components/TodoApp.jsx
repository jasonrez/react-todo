import React from 'react';

// components
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';


export default class TodoApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walks the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Watch Walking Dead'
        },
        {
          id: 4,
          text: 'Make Tea'
        }
      ]
    }
  }
  handleAddTodo(text){
    alert('new todo: ' + text);
  }
  render() {
    let {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo handleAddTodo={this.handleAddTodo.bind(this)}/>
      </div>
    )
  }
}

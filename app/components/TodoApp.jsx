import React from 'react';

// components
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';


export default class TodoApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showCompleted: false,
      searchText: '',
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

  altHandleAddTodo = (text) => {
    alert('new alt todo: ' + text);
  }

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }

  render() {
    let {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch.bind(this)}/>
        <TodoList todos={todos} />
        <AddTodo handleAddTodo={this.altHandleAddTodo} />

      </div>
    )
  }
}

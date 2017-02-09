import React from 'react'
import uuid from 'node-uuid'

// components
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'


export default class TodoApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walks the dog'
        },
        {
          id: uuid(),
          text: 'Clean the yard'
        },
        {
          id: uuid(),
          text: 'Watch Walking Dead'
        },
        {
          id: uuid(),
          text: 'Make Tea'
        }
      ]
    }
  }

  handleAddTodo(text){

    this.setState ({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    })
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
        <AddTodo handleAddTodo={this.handleAddTodo.bind(this)} />

      </div>
    )
  }
}

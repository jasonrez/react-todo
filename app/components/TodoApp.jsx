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
          text: 'Walks the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        },
        {
          id: uuid(),
          text: 'Watch Walking Dead',
          completed: true
        },
        {
          id: uuid(),
          text: 'Make Tea',
          completed: false
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
          text: text,
          completed: false
        }
      ]
    })
  }
  handleToggle(id) {

    let updatedTodos = this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })



    this.setState({
      todos: [
        ...updatedTodos
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
        <TodoList todos={todos} onToggle={this.handleToggle.bind(this)}/>
        <AddTodo handleAddTodo={this.handleAddTodo.bind(this)} />

      </div>
    )
  }
}

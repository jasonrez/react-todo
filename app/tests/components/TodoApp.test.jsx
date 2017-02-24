import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import React from 'react'
import ReactDOM from 'react-dom'
let $ = require('jQuery');

// components
import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  })

  it('should add todo to the todos state on handleAddTodo', () => {
    const todoText = 'test test';
    let todoApp = TestUtils.renderIntoDocument(<TodoApp />)

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    // Expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number')
  })

  it('should toggle completed value when handleToggle is called', () => {
    let todoData = {
      id : 11,
      text : 'test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }

    let todoApp = TestUtils.renderIntoDocument(<TodoApp />)


    todoApp.setState({todos: [todoData]})


    expect(todoApp.state.todos[0].completed).toBe(false)
    todoApp.handleToggle(11)
    expect(todoApp.state.todos[0].completed).toBe(true)
    // Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number')
  })

  // Test that when toggle from frue to false, completedAt get removed
  it('should remove completedAt when toggled from a completed state', () => {
    let todoData = {
      id : 11,
      text : 'test features',
      completed: true,
      createdAt: 5000,
      completedAt: 10000
    }

    let todoApp = TestUtils.renderIntoDocument(<TodoApp />)

    todoApp.setState({todos: [todoData]})

    expect(todoApp.state.todos[0].completed).toBe(true)
    todoApp.handleToggle(11)
    expect(todoApp.state.todos[0].completed).toBe(false)
    // Expect completedAt to be a number
    //expect(todoApp.state.todos[0].completedAt).toBe(undefined)
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  })
})

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
  })

  it('should toggle completed value when handleToggle is called', () => {
    let todoData = {
      id : 11,
      text : 'test features',
      completed: false
    }

    let todoApp = TestUtils.renderIntoDocument(<TodoApp />)


    todoApp.setState({todos: [todoData]})

    // check that first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(false);
    // call handleToggle with 11
    todoApp.handleToggle(11)
    // Verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(true);
  })
})

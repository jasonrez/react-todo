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
})

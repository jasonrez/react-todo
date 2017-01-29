import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import React from 'react'
import ReactDOM from 'react-dom'
let $ = require('jQuery');

// components
import TodoList from 'TodoList';
import Todo from 'Todo';


describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  })

  it('should render one Todo component for each todo item', () => {
    let todos = [{
      id: 1,
      text: 'first todo'
    },
    {
      id: 2,
      text: 'second todo'
    }
  ]
  let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
  let todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

  expect(todoComponents.length).toBe(todos.length);
  })
})

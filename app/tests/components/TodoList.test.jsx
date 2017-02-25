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
  expect(todoList.refs.message).toNotExist();
  })

  it('should render empty message if no todos', () => {
    let todos = []
    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>)

    expect(todoList.refs.message).toExist();
    // jquery way, find the dom node in ReactDOM, then assert from that
     //let $el = $(ReactDOM.findDOMNode(todoList))
     // expect($el.find('.container__message').length).toBe(1);







  })

})

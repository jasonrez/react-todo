import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
let $ = require('jQuery');

// components
import ConnectedTodoList ,{TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';
import {configure} from 'configureStore'

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  })

  it('should render one Todo component for each todo item', () => {
    let todos = [{
      id: 1,
      text: 'first todo',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    },
    {
      id: 2,
      text: 'second todo',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }
  ]
  let store = configure({todos});
  let provider = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <ConnectedTodoList/>
    </Provider>
  )
  let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0]
  let todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

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

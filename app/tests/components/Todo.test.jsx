import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import React from 'react'
import ReactDOM from 'react-dom'
let $ = require('jQuery');

import * as actions from 'actions'
// components
import {Todo} from 'Todo';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  })

  it('should dispatch TOGGLE_TODO action onChange', () => {
    let todoData = {
      id: 199,
      text: 'test data',
      completed: true
    }
    let action = actions.startToggleTodo(todoData.id, !todoData.completed)

    let spy = expect.createSpy();
    let todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>)

    TestUtils.Simulate.click(todo.refs.completed);

    expect(spy).toHaveBeenCalledWith(action)
  })
})

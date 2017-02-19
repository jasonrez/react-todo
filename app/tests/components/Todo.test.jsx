import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import React from 'react'
import ReactDOM from 'react-dom'
let $ = require('jQuery');

// components
import Todo from 'Todo';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  })

  it('should call onToggle with id onChange', () => {
    let todoData = {
      id: 199,
      text: 'test data',
      completed: true
    }

    let spy = expect.createSpy();
    let todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>)

    TestUtils.Simulate.change(todo.refs.completed);

    expect(spy).toHaveBeenCalledWith(199)

  })
})

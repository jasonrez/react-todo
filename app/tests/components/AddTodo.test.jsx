import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import React from 'react'
import ReactDOM from 'react-dom'
let $ = require('jQuery');
import * as actions from 'actions'

// components
import {AddTodo} from 'AddTodo';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  })

  // should do nothing when input is empty
  it('should do nothing when input is empty', () => {
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
    let $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.TodoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  })

  // should call prop function when valid data
  it('should dispatch ADD_TODO when valid data', () => {
    let todoText = 'Groovy'
    let action = actions.startAddTodo(todoText)

    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.TodoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);


    expect(spy).toHaveBeenCalledWith(action);
  })

})

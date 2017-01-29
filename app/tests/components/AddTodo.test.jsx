import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import React from 'react'
import ReactDOM from 'react-dom'
let $ = require('jQuery');

// components
import AddTodo from 'AddTodo';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  })

  // should do nothing when input is empty
  it('should do nothing when input is empty', () => {
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy}/>)
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.TodoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);


    expect(spy).toNotHaveBeenCalled();
  })

  // should call prop function when valid data
  it('should call handleAddTodo when valid data', () => {
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy}/>)
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.TodoText.value = 'Test Data';
    TestUtils.Simulate.submit($el.find('form')[0]);


    expect(spy).toHaveBeenCalledWith('Test Data');
  })

})

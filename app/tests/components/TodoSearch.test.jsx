import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import React from 'react'
import ReactDOM from 'react-dom'
let $ = require('jQuery');

// components
import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  })


  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    let searchText = 'DuckDuckDog'
    let spy = expect.createSpy();
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    }
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(todoSearch));

    todoSearch.refs.searchText.value = searchText
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action)

  })

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    let searchText = '';
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }

    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(todoSearch));

    todoSearch.refs.showCompleted.checked = true
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(action)

    todoSearch.refs.showCompleted.checked = false
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(action)

  })
})

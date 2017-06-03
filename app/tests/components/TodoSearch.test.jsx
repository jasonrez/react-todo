import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import React from 'react'
import ReactDOM from 'react-dom'
let $ = require('jQuery');

// components
import TodoSearch from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  })


  it('should call onSearch with entered input text', () => {
    let searchText = 'DuckDuckDog'
    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(todoSearch));

    todoSearch.refs.searchText.value = searchText
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, searchText)

  })

  it('should call onSearch with proper checked value', () => {
    let searchText = '';
    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(todoSearch));

    todoSearch.refs.showCompleted.checked = true
    TestUtils.Simulate.click(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(true, '')

    todoSearch.refs.showCompleted.checked = false
    TestUtils.Simulate.click(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(false, searchText)

  })
})

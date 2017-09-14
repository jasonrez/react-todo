import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import expect from 'expect'
// let actions = require('actions');
import * as actions from 'actions'

let createMockStore = configureMockStore([thunk]) // takes array of middle ware

describe ('actions', () => {
  it('should Generate search text actions', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some search text'
    };
    let res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  })

  it('Should Generate toggle show completed action', ()=> {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    let res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  })

  it('Should Generate add todo action', () => {
    let action = {
      type: 'ADD_TODO',
      todo: {
        id: 'abc123',
        text: 'some todo',
        completed: false,
        createdAt: 0
      }
    };
    let res = actions.addTodo(action.todo);

    expect(res).toEqual(action)
  })

  it('should crerate todo and dispatch ADD_TODO', (done)=>{
    const store = createMockStore({});
    const todoText = 'My todo item'

    store.dispatch(actions.startAddTodo(todoText)).then(()=>{
      const actions = store.getActions()
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      })
      expect(actions[0].todo).toInclude({
        text: todoText
      })
      done()
    }).catch(done)
  })

  it('should generate add todos action', ()=>{
    let todos = [{
      id : '111',
      text : 'anything'
    }]

    let action = {
      type : 'ADD_TODOS',
      todos
    }

    let res = actions.addTodos(todos);
    expect(res).toEqual(action)
  })



  it('should toggle add todo', () =>{
    let action = {
      type: 'TOGGLE_TODO',
      id: 'woop'
    };
    let res = actions.toggleAddTodo(action.id);

    expect(res).toEqual(action);
  })
})

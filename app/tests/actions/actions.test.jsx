import expect from 'expect'
// let actions = require('actions');
import * as actions from 'actions'


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
      text: 'thing to do'
    };
    let res = actions.addTodo(action.text);

    expect(res).toEqual(action)
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

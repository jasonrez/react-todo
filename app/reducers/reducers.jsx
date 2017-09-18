//let uuid = require('node-uuid');
//let moment = require('moment');
import uuid from 'node-uuid'
import moment from 'moment'

export let searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
    return state;
  };
};

//showCompletedTodo default false, TOGGLE_SHOW_COMPLETED

export let showCompletedReducer = (state = false, action)=> {
  switch(action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};

export let todoReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
    return [
      ...state,
      action.todo
    ]
    case 'ADD_TODOS':
      return  [
        ...state,
        ...action.todos
    ]
    // add case for TOGGLE_TODO completed equal to opposite value & updateCompletedAt
    case 'UPDATE_TODO':
      return state.map((todo)=>{
        if(todo.id == action.id){
          return {
            ...todo,
            ...action.updates
          }
        }else {
          return todo;
        }
      })
    default:
    return state
  }
}

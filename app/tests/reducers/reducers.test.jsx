import expect from 'expect';
import df from 'deep-freeze-strict';
import * as reducers from 'reducers'
import moment from 'moment'

describe('Reducers', () =>{
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      let res = reducers.searchTextReducer(df(''), df(action))

      expect(res).toEqual(action.searchText);
    })
  })

  describe('showCompletedReducer', () =>{
    it('should flip status of showComplted', () =>{
      let action ={
        type: 'TOGGLE_SHOW_COMPLETED'
      }

      let res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    })
  })

  describe('todoReducer', () => {
    it('should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };
      let res = reducers.todoReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    })
  })

  describe('toggleRodo', () => {
    it('should toggle todo', () => {
      let todo = [{
        id: 100,
        completed: true,
        completedAt: moment().unix()
      }]
      let action = {
        type: 'TOGGLE_TODO',
        id: 100
      }
      let res = reducers.todoReducer(df(todo),df(action))

      expect(res[0].completed).toEqual(false)
      expect(res[0].completedAt).toEqual(undefined)
    })
  })

})

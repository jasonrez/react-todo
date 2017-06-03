import expect from 'expect';
import df from 'deep-freeze-strict';
import * as reducers from 'reducers'

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
})

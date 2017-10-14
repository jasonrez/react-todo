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
        todo: {
          id: 'abc123',
          text: 'walk the doggo',
          completed: false,
          completedAt: 74867845
        }
      };
      let res = reducers.todoReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    })
  })

  describe('toggleTodo', () => {
    it('should toggle todo', () => {
      let todos = [{
        id: 100,
        text: 'some random todo',
        completed: true,
        createdAt: 123,
        completedAt: moment().unix()
      }]
      let updates = {
        completed: false,
        completedAt: null
      }
      let action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      }
      let res = reducers.todoReducer(df(todos),df(action))

      expect(res[0].completed).toEqual(updates.completed)
      expect(res[0].completedAt).toEqual(updates.completedAt)
      expect(res[0].text).toEqual(todos[0].text)
})
    it('should add existing todos', () =>{
      let todos = {
        id : '111',
        text : 'anything goes'
      }
      let action = {
        type : 'ADD_TODOS',
        todos
      }
      let res = reducers.todoReducer(df([]),df(action));


      expect(res[0]).toEqual(todos[0])


    })


  })

  describe('auth reducer', ()=>{
    it('should add uid to auth', () => {
      let auth = {
        uid: 'random uid'
      }
      let action = {
        type: 'LOGIN',
        uid: auth.uid
      }
      let res = reducers.authReducer(df([]),df(action))

      expect(res).toEqual(auth)
    })
    it('should clear uid from store', ()=>{
      let dirtyAuth = { uid:'random uid'}
      let cleanAuth = {}
      let action = {
        type: 'LOGOUT'
      }
      let res = reducers.authReducer(df(dirtyAuth),df(action))

      expect(res).toEqual(cleanAuth)
    })

  })
})

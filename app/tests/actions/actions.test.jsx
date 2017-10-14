import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import expect from 'expect'
// let actions = require('actions');
import firebase, {firebaseRef} from 'app/firebase/'
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
      type: 'UPDATE_TODO',
      id: 'woop',
      updates: {
        completed:false
      }
    };
    let res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  })

  describe('auth', ()=>{
    it('should dispatch LOGIN action', ()=>{
      let action = {
        type: 'LOGIN',
        uid: 'random uid'
      }
      let res = actions.login(action.uid)

      expect(res).toEqual(action)
    })
    it('should dispatch LOGOUT action', ()=>{
      let action = {
        type: 'LOGOUT',
      }
      let res = actions.logout()

      expect(res).toEqual(action)
    })
  })

  describe('Test with firebase todos', ()=>{
    let testTodoRef;

    beforeEach( (done)=>{
      let todosRef = firebaseRef.child('todos')

      todosRef.remove().then(()=>{
        testTodoRef = firebaseRef.child('todos').push()

        return testTodoRef.set({
          text: ' something to do',
          completed: false,
          createdAt: 676767
        })
      })
      .then(()=> done())
      .catch(done)
    })


    afterEach( (done)=>{
      testTodoRef.remove().then(()=> done())
    })

    it('should toggle todo and dispatch UPDATE_TODO action ', (done)=>{
      const store = createMockStore({})
      const action = actions.startToggleTodo(testTodoRef.key, true)

      store.dispatch(action).then(()=>{
        const mockActions = store.getActions()

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        })

        expect(mockActions[0].updates).toInclude({
          completed: true
        })

        expect(mockActions[0].updates.completedAt).toExist()

        done()
      }, done)
    })

    it('should grab todos from firebase and load into app', (done)=>{
       const store = createMockStore({})
      // add a todo to firebase first

      const action = actions.startAddTodos();
      //
       store.dispatch(action).then(()=>{
         const mockActions = store.getActions()

         expect(mockActions[0].type).toEqual('ADD_TODOS')
         expect(mockActions[0].todos.length).toEqual(1)
         expect(mockActions[0].todos[0].text).toEqual(' something to do')
         done()
       }).catch(done);
    })

  })
})

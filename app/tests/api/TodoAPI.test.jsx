// 3rd party
import expect from 'expect'

// components
import TodoAPI from 'TodoAPI'

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos')
  })
  it('should exist', () =>{
    expect(TodoAPI).toExist()
  })

  describe('getTodos', () => {

    it('should return empty array for bad localstorage data', () => {
      let actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual([]);
    })

    it('should return todos if valid array in localStorage',() =>{
      let todos = [{
        id: 199,
        text: 'test data',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos))

      expect(TodoAPI.getTodos()).toEqual(todos)
    })

  })

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      let todos = [{
        id: 199,
        text: 'test data',
        completed: false
      }];

      TodoAPI.setTodos(todos)

      expect(localStorage.getItem('todos')).toEqual(JSON.stringify(todos))

    })

    it('should not set invalid todos array', () => {
      let todos = {data: 'invalid data'}

      TodoAPI.setTodos(todos);

      expect(localStorage.getItem('todos')).toBe(null)
    })

  })
})

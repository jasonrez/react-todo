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

  describe('filterTodos', (() => {
    let todos = [{
      id: 1,
      text: 'do something',
      completed: true
    },{
      id: 1,
      text: 'do something else',
      completed: true
    },{
      id: 1,
      text: 'try and do this',
      completed: false
    }]

    it('should return all items if showCompleted is true', ()=>{
      let filteredTodos = TodoAPI.filterTodos(todos, true, '')
      expect(filteredTodos.length).toBe(3)
    })

    it('should return all non-completed todos when showCompleted is false', ()=>{
      let filteredTodos = TodoAPI.filterTodos(todos, false, '')
      expect(filteredTodos.length).toBe(1)
    })

    it('should sort by completed status', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '')
      expect(filteredTodos[0].completed).toBe(false)
    })

    it('should return all todos if searchText is empty', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '')
      expect(filteredTodos.length).toBe(3)
    })

    it('should filter todos by searchText', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, 'something')
      expect(filteredTodos.length).toBe(2)
    })



  }))
})

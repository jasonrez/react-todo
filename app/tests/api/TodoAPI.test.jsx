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

  describe('filterTodos', (() => {
    let todos = [{
      id: 1,
      text: 'do something',
      completed: true
    },{
      id: 2,
      text: 'do something else',
      completed: true
    },{
      id: 3,
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

let $ = require('jQuery');

class TodoAPI {

  constructor(){

  }

  filterTodos(todos, showCompleted, searchText){
    let filteredTodos = todos

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted
    })

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      //let text = todo.text.toLowerCase()
      return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText) > -1
    })


    // Filter by non-completed
    filteredTodos.sort( (a,b) => {
      return a.completed - b.completed
    })

    return filteredTodos
  }
}



export default  new TodoAPI()

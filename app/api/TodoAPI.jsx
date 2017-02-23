let $ = require('jQuery');

class TodoAPI {

  constructor(){

  }
  getTodos(){
    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try{
      todos = JSON.parse(stringTodos)
    } catch (e) {

    }

    return $.isArray(todos) ? todos : []
  }

  setTodos(todos){
    if ($.isArray(todos)) {
      localStorage.setItem('todos',JSON.stringify(todos))
      return todos;
    }
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

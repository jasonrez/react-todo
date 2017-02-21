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
}



export default  new TodoAPI()

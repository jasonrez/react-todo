import moment from 'moment'
import firebase, {firebaseRef} from 'app/firebase/' // may need index.jsx
export let setSearchText = (searchText) => {
  return {type: 'SET_SEARCH_TEXT', searchText}
}

// toggleShowCompleted TOGGLE_SHOW_COMPLETED
export let toggleShowCompleted = () => {
  return {type: 'TOGGLE_SHOW_COMPLETED'}
}

export let addTodo = (todo) => {
  return {type: 'ADD_TODO', todo}
}

export let startAddTodo = (text) => {
  return (dispatch, getState) => {
    let todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    }
    let todoRef = firebaseRef.child('todo').push(todo)

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }))
    })
  }
}

export let addTodos = (todos) => {
  return {type: 'ADD_TODOS', todos}
}

// toggleTodo(id) TOGGLE_TODO
export let toggleAddTodo = (id) => {
  return {type: 'TOGGLE_TODO', id}
}

import moment from 'moment'
import firebase, {firebaseRef, githubProvider} from 'app/firebase/' // may need index.jsx

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
    let todoRef = firebaseRef.child('todos').push(todo)

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }))
    })
  }
}

export let addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
}

export let startAddTodos = () => {

  return (dispatch, getState) =>{

  // get todos from firebase
  let todoRef = firebaseRef.child('todos');
  return todoRef.once('value').then((snapshot)=>{
    let todos = snapshot.val() || {}
    let parseTodos = []
    Object.keys(todos).map((todoId)=>{
      parseTodos.push({
        ...todos[todoId],
        id: todoId
      })
    })
    dispatch(addTodos(parseTodos))
  })
 }
}




// toggleTodo(id) TOGGLE_TODO
export let updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  }
}

export let startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    let todoRef = firebaseRef.child(`todos/${id}`)
    var updates = {
      completed,
      completedAt: completed ? moment().unix(): null
    }
    return todoRef.update(updates).then(()=>{
      dispatch(updateTodo(id, updates))
    })
  }
}

export let startLogin = () =>{
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result)=>{ // auth has many methods that can be called
      console.log('Auth Worked', result)
    }, (error) =>{ console.log('unable to auth', error)})
  }
}

export let startLogout = () =>{
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(()=>{
      console.log('signed out')
    })
  }
}

export let setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
}

// toggleShowCompleted TOGGLE_SHOW_COMPLETED
export let toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  }
}

export let addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}

// toggleTodo(id) TOGGLE_TODO
export let toggleAddTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}


import { createStore, compose, combineReducers} from 'redux'
import { searchTextReducer, showCompletedReducer, todoReducer } from 'reducers'

export let configure = () => {
  let reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted : showCompletedReducer,
    todos: todoReducer
  })

  let store = createStore(reducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )

  return store;
}

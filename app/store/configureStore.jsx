
import { createStore, compose, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { searchTextReducer, showCompletedReducer, todoReducer } from 'reducers'

export let configure = (initialState = {}) => {
  let reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted : showCompletedReducer,
    todos: todoReducer
  })

  //const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
  let store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )


  return store;
}

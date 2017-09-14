import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
//import './../playground/firebaseApp/index'

// components
import TodoApp from 'TodoApp';
import TodoAPI from 'TodoAPI'

import * as actions from 'actions'
import {configure} from 'configureStore'
let store = configure();


store.subscribe(() => {
  let state = store.getState();
  console.log('new state', state)

  TodoAPI.setTodos(state.todos)
})

let initialTodos =TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos))

$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
<Provider store={store}>
  <TodoApp/>
</Provider>,
  document.getElementById('app')
);

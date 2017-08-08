import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// components
import TodoApp from 'TodoApp';

import * as actions from 'actions'
import {configure} from 'configureStore'
let store = configure();

store.subscribe(() => {
  console.log('new state', store.getState())
})

store.dispatch(actions.addTodo('SleepTime'));

$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
<TodoApp/>,
  document.getElementById('app')
);

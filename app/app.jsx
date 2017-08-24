import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// components
import TodoApp from 'TodoApp';

import * as actions from 'actions'
import {configure} from 'configureStore'
let store = configure();

store.subscribe(() => {
  console.log('new state', store.getState())
})

$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
<Provider store={store}>
  <TodoApp/>
</Provider>,
  document.getElementById('app')
);

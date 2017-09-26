import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
//import './../playground/firebaseApp/index'

// components
import TodoApp from 'TodoApp'
import Login from 'Login'
import TodoAPI from 'TodoAPI'

import * as actions from 'actions'
import {configure} from 'configureStore'
let store = configure();




store.dispatch(actions.startAddTodos())
// load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
<Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/">
      <Route path={"/todos"} component={TodoApp}/>
      <IndexRoute  component={Login}/>
    </Route>
  </Router>
</Provider>,
  document.getElementById('app')
);

// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path="/" component={Main}>
//       <Route path={"about"} component={About}/>
//       <Route path={"examples"} component={Examples}/>
//       <IndexRoute component={Weather}/>
//     </Route>
//   </Router>,
//   document.getElementById('app')
// );

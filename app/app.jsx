import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

// components
import TodoApp from 'TodoApp';


$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
<TodoApp/>,
  document.getElementById('app')
);

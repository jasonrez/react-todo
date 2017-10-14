import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {hashHistory} from 'react-router';
//import './../playground/firebaseApp/index'

// components

import * as actions from 'actions'
import {configure} from 'configureStore'
let store = configure();
import TodoRouter from 'app/router/'
//
import firebase from 'app/firebase/'

firebase.auth().onAuthStateChanged((user)=>{
  //hashHistory.push(user ? '/todos' : '/')
  if(user){
    store.dispatch(actions.login(user.uid))
    hashHistory.push('/todos')
  } else {
    store.dispatch(actions.logout())
    hashHistory.push('/')
  }
})



store.dispatch(actions.startAddTodos())
// load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

let requireLogin = (nextState, replace, next)=>{
  if(!firebase.auth().currentUser) {
    console.log('not auth!!!')
    replace('/')
  }
  next()
}

let redirectIfLoggedIn = (nextState, replace, next) =>{
  if(firebase.auth().currentUser){
    replace('/todos')
  }
  next()
}

ReactDOM.render(
  <Provider store={store}>
    <TodoRouter />
  </Provider>,
  document.getElementById('app')
);

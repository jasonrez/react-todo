import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import TodoApp from 'TodoApp'
import Login from 'Login'
import firebase from 'app/firebase/'

class TodoRouter extends React.Component {
      requireLogin(nextState, replace, next){
        if(!firebase.auth().currentUser) {
          console.log('not auth!!!')
          replace('/')
        }
        next()
      }

      redirectIfLoggedIn(nextState, replace, next){
        if(firebase.auth().currentUser){
          replace('/todos')
        }
        next()
      }
render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" >
          <Route path={"/todos"} component={TodoApp} onEnter={this.requireLogin.bind(this)}/>
          <IndexRoute  component={Login} onEnter={this.redirectIfLoggedIn.bind(this)}/>
        </Route>
      </Router>
    )
  }
}

export default TodoRouter

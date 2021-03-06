import React from 'react';
import {connect} from 'react-redux'
// components
import Todo from 'Todo';
import TodoAPI from 'TodoAPI'

export class TodoList extends React.Component {
  render() {
    let {todos, showCompleted, searchText} = this.props;

    let renderTodos = () => {
      let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
      if (filteredTodos.length === 0) {
        return (
          <p className="container__message" ref="message">Nothing To Do</p>
        )
      }

      return filteredTodos.map((todo) => {
        return (<Todo key={todo.id} {...todo}/>)
      })
    }

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
}

export default connect((state) => {
  return state
})(TodoList)

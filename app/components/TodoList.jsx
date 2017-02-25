import React from 'react';

// components
import Todo from 'Todo';

export default class TodoList extends React.Component {
  render(){
    let {todos} = this.props;

    let renderTodos = () => {
      if(todos.length === 0) {
        return (
          <p className="container__message" ref="message">Nothing To Do</p>
        )
      }

      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        )
      })
    }

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
}

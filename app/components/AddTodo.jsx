import React from 'react';
import {connect} from 'react-redux'
import * as actions from 'actions'

export class AddTodo extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    let todoText = this.refs.TodoText.value
    if (todoText.length > 0) {
      this.refs.TodoText.value = '';
      //this.props.handleAddTodo(text);
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.TodoText.focus();
    }
  }

  render() {

    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="TodoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
}



export default connect()(AddTodo)

import React from 'react';

export default class AddTodo extends React.Component {

  onSubmit(e){
    e.preventDefault();
    let text = this.refs.TodoText.value
    if (text.length > 0){
      this.refs.TodoText.value = '';
      this.props.handleAddTodo(text);
    } else {
      this.refs.TodoText.focus();
    }
  }

  render(){

    return (
    <div>
      <form ref="form" onSubmit={this.onSubmit.bind(this)}>
        <input type="text" ref="TodoText" placeholder="What do you need to do?"/>
        <button className="button expanded">Add Todo</button>
      </form>
    </div>
    )
  }
}

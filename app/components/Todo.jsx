import React from 'react';

export default class Todo extends React.Component {



  render(){
    let {id, text, completed} = this.props
    return (
      <div >
        <label >
          <input type="checkbox" ref="completed" onChange={ () => {this.props.onToggle(id)}} checked={completed}/>
          {text}
        </label>
      </div>
    )
  }
}
//
// Todo.propTypes = {
//   id : React.PropTypes.string.isRequired,
//   text : React.PropTypes.string.isRequired,
//   completed : React.PropTypes.bool.isRequired,
//   onToggle : React.PropTypes.func.isRequired
// }

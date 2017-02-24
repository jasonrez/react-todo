import React from 'react';
import moment from 'moment'

export default class Todo extends React.Component {



  render(){
    let {id, text, completed, createdAt, completedAt} = this.props
    let renderDate = () => {
      let message = 'Created'
      let timestamp = createdAt

      if (completed){
        message = 'Completed'
        timestamp = completedAt
      }

      return message + moment.unix(timestamp).format(' MMM Do YYYY @  h:mm a')
    }

    return (
      <div >
        <label >
          <input type="checkbox" ref="completed" onChange={ () => {this.props.onToggle(id)}} checked={completed}/>
          {text}
          <p>{renderDate()}</p>
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

import React from 'react';
import {connect} from 'react-redux'
import * as actions from 'actions'

export class TodoSearch extends React.Component {
  render() {
    let {dispatch, showCompleted, searchText} = this.props

    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={()=>{
            let searchText = this.refs.searchText.value
            dispatch(actions.setSearchText(searchText))
          }}/>
        </div>

        <label >
          <input type="checkbox" ref="showCompleted" default={showCompleted} onChange={()=>{ dispatch(actions.toggleShowCompleted())}}/>
          <p>Show Completed todos</p>
        </label>
      </div>
    )
  }
}

export default connect(
  (state)=> {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch)

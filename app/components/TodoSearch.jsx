import React from 'react';

export default class TodoSearch extends React.Component{

  handleSearch() {
    let showCompleted =this.refs.showCompleted.checked;
    let searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }

  render(){
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch.bind(this)}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch.bind(this)}/>
            Show Completed todos

          </label>
        </div>
      </div>
    )
  }
}

TodoSearch.propTypes ={
  onSearch : React.PropTypes.func.isRequired
}

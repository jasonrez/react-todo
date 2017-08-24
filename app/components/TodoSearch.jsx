import React from 'react';

export default class TodoSearch extends React.Component {

  handleSearch() {
    let showCompleted = this.refs.showCompleted.checked;
    let searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }

  render() {
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch.bind(this)}/>
        </div>

        <label onClick={this.handleSearch.bind(this)}>
          <input type="checkbox" ref="showCompleted"/>
          <p>Show Completed todos</p>
        </label>
      </div>
    )
  }
}
//
// TodoSearch.propTypes ={
//   onSearch : React.PropTypes.func.isRequired
// }
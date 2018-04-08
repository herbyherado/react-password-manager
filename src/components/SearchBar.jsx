import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateQuery } from '../store/search/search.actions'
import '../styles/SearchBar.css'

class SearchBar extends Component {
  handleChange = (e) => {
    console.log(e.target.value)
    return (
      this.props.changeQuery(e.target.value)
    )
  }
  render() {
    return (
      <div>
       <form className="search-form">
        <input type="text" className="search" name="search" onChange={ this.handleChange } placeholder="Search..."/>
      </form>
      </div>
    )
  }
};

function mapDispatchToProps (dispatch) {
  return {
    changeQuery: (payload) => dispatch(updateQuery(payload))
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)
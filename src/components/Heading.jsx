import React, { Component } from 'react';
import logo from '../logo.svg';
import SearchBar from './SearchBar'
import { connect } from 'react-redux'
import { signOut } from '../store/auth/auth.action'
import { Link } from 'react-router-dom'
import '../styles/Heading.css'

class Heading extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <Link to='/dashboard'>
            <div className="logo-title">Password Manager</div>
          </Link>
          <img src={logo} className="App-logo" alt="logo" style={{ opacity: '0.5'}}/>
        </div>
        <div className="search-bar">
          <SearchBar/>
        </div>
        <div className="login">
          <button style={{ margin: '5px auto' }}className='btn btn--stripe' onClick={ () => this.props.logout() }>Sign Out</button>
        </div>
      </div>
    )
  }
};

function mapDispatchToProps (dispatch) {
  return {
    logout: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(Heading)
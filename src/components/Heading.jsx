import React, { Component } from 'react';
import logo from '../logo.svg';
import SearchBar from './SearchBar'
import '../styles/Heading.css'

class Heading extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <div className="logo-title">Password Manager</div>
          <img src={logo} className="App-logo" alt="logo" style={{ opacity: '0.5'}}/>
        </div>
        <div className="search-bar">
          <SearchBar/>
        </div>
        <div className="login"></div>
      </div>
    )
  }
};

export default Heading
import React, { Component } from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import '../styles/Heading.css'

class HomeHeading extends Component {
  render() {
    return (
      <div className="header">
        <div className="search-bar"></div>
        <Link to='/'>
          <div className="logo">
            <div className="logo-title">Password Manager</div>
            <img src={logo} className="App-logo" alt="logo" style={{ opacity: '0.5'}}/>
          </div>
        </Link>
        <div className="login"></div>
      </div>
    )
  }
};

export default HomeHeading
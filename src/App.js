import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import './App.css'
import Dashboard from '../src/components/Dashboard'
import Home from '../src/components/Home'
import Register from '../src/components/Register'
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' render={ (props) => (this.props.auth.isLogin) ? (<Redirect to='/dashboard' />) : (<Home />) } />
          <Route path='/register' render={ (props) => (this.props.auth.isLogin) ? (<Redirect to='/dashboard' />) : (<Register />)  } />
          <Route path='/dashboard' render={ (props) => (this.props.auth.isLogin) ? (<Dashboard />) : (<Redirect to='/' />)  } />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps (state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, null)(App)

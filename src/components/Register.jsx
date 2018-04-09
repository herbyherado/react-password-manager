import React, { Component } from 'react';
import { connect } from 'react-redux'
import HomeHeading from './HomeHeading'
import { Register as register } from '../store/auth/auth.action'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
      <HomeHeading />
        <div className="register-form">
          <div className="register-title"> Register Now </div>
          <div className="register-field">
            <input type="text" name='email' placeholder="email" id="register-email" onChange={ this.handleChange }/>
          </div>
          <div className="register-field">
            <input type="password" name='password' placeholder="password" id="register-password" onChange={ this.handleChange }/>
          </div>
          <div className="register-field">
            <button onClick={ () => this.props.registerUser({...this.state}) }> register </button>
          </div>
        </div>
        <div>
        </div>
        <div style={{ position: 'fixed', top: '50vh', left: '50%' }} >
          <h3><a href='/'>Back</a></h3>
        </div>
      </div>
    )
  }
};

function mapDispatchToProps (dispatch) {
  return {
    registerUser: (payload) => dispatch(register(payload))
  }
}

export default connect(null, mapDispatchToProps)(Register)
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../store/auth/auth.action'

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  
  handleChange = (e) => {
    console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
        <div className="sign-form">
          <div className="register-title"> Sign In </div>
          <div className="register-field">
            <input type="text" name='email' placeholder="email" onChange={ this.handleChange } id="sign-in-email"/>
          </div>
          <div className="register-field">
            <input type="password" name='password' placeholder="password"  onChange={ this.handleChange } id="sign-in-password"/>
          </div>
          <div className="register-field">
            <button onClick={ () => this.props.signInUser(this.state) }> Sign In </button>
          </div>
        </div>
    )
  }
};


function mapDispatchToProps (dispatch) {
  return {
    signInUser: (payload) => dispatch(signIn(payload))
  }
}

export default connect(null, mapDispatchToProps)(SignIn)

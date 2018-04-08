import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import Validation from './Validation'
import MediaQuery from 'react-responsive'
import { connect } from 'react-redux'
import '../styles/Form.css'
import { addPassword } from '../store/password/password.actions'
import swal from 'sweetalert'

class Form extends Component {
  constructor () {
    super()
    this.state = {
      url: '',
      username: '',
      password: '',
      urlFormat: false,
      lowerCase: false,
      upperCase: false,
      hasNumber: false,
      specialCharacter: false,
      minLength: false,
      validateAll: false
    }
  }
  validateAll = () => {
    return (
      ( this.state.username && 
        this.state.urlFormat && 
        this.state.lowerCase && 
        this.state.upperCase &&
        this.state.hasNumber &&
        this.state.specialCharacter &&
        this.state.minLength
      ) ?
      this.setState({ validateAll: true }) 
      :
      this.setState({ validateAll: false })
    )
  }
  validateUrl = () => {
    let regex = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi
    return(
      regex.test(this.state.url) ?
      this.setState({ urlFormat: true })
      :
      this.setState({ urlFormat: false })
    )
  }
  validateLength = () => {
    return (this.state.password.length > 4) ? 
      this.setState({ minLength: true })  
      :
      this.setState({ minLength: false })
  }
  validateHasNumber = () => {
    return (/\d/g.test(this.state.password)) ?
      this.setState({ hasNumber: true })
      :
      this.setState({ hasNumber: false })
  }
  validateHasLowerCase = () => {
    return (/[a-z]/g.test(this.state.password)) ?
      this.setState({ lowerCase: true })
      :
      this.setState({ lowerCase: false })
  }
  validateHasUpperCase = () => {
    return (/[A-Z]/g.test(this.state.password)) ?
      this.setState({ upperCase: true })
      :
      this.setState({ upperCase: false })
  }
  validateHasSpecialCharacter = () => {
    return (/\W/g.test(this.state.password)) ?
      this.setState({ specialCharacter: true })
      :
      this.setState({ specialCharacter: false })
  }
  handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      }, () => {
        this.validateLength()
        this.validateHasNumber()
        this.validateHasLowerCase()
        this.validateHasUpperCase()
        this.validateHasSpecialCharacter()
        this.validateUrl()
        this.validateAll()
      })
  }
  showValidate = () => {
    let valBox = document.getElementById('validate')
    valBox.style.visibility = 'visible'
    valBox.style.width = '600px'
    valBox.style.color = 'rgb(126, 126, 126)'
  }
  minimizeValidate = () => {
    let valBox = document.getElementById('validate')
    valBox.style.color = 'whitesmoke'
    valBox.style.width = '20px'
  }
  showValidateMin = () => {
    let valBox = document.getElementById('validateMin')
    valBox.style.visibility = 'visible'
    valBox.style.width = '360px'
    valBox.style.height = '280px'
    valBox.style.color = 'rgb(126, 126, 126)'
  }
  minimizeValidateMin = () => {
    let valBox = document.getElementById('validateMin')
    valBox.style.color = 'whitesmoke'
    valBox.style.width = '370px'
    valBox.style.height = '25px'
  }
  resetState = () => {
    this.setState({ 
      ...this.state,
      url: '',
      username: '',
      password: ''
    })
    document.getElementById('url').value = ''
    document.getElementById('username').value = ''
    document.getElementById('password').value = ''
  }
  submitPassword = () => {
    console.log(this.state)
    let obj = {
      url: this.state.url,
      username: this.state.username,
      password: this.state.password
    }
    if (!this.state.urlFormat) {
      swal(":(", "Please check your url input field", "warning")
    } else if (!this.state.username) {
      swal(":(", "Please check your username input field", "warning")
    } else if (!this.state.password) {
      swal(":(", "Password field is required", "warning")
    } else {
      this.props.addData(obj)
      this.resetState()
      swal("Hooray!", "Data saved!", "success")
    }
  }
  render() {
    return (
      <div className="main-container">
        <div className="form-container">
          <div autoComplete="off" id="form" >
            <h1 id="message">Password Form</h1><small id="smallMessage"> </small>
            <div className="field">
              <input type="url" name="url" placeholder="URL" id="url" onChange={ this.handleChange } auto="off"/>
              <label htmlFor="url">URL</label>
            </div>
              { 
                (this.state.url.length === 0) ?
                <p style={{ display:'none' }}></p> :
                (!this.state.urlFormat) &&
                <p style={{ marginTop: '-0.7em', marginBottom: '-0.65em' }}> Please enter a valid url </p>
              }
            <div className="field">
              <input type="username" name="username" placeholder="Username" id="username" onChange={ this.handleChange } auto="off" required/>
              <label htmlFor="username">Username</label>
            </div>
            <div className="field">
              <MediaQuery minWidth={900}>
                <input type="password" name="password" placeholder="Password" id="password" onChange={ this.handleChange } onFocus={ () => this.showValidate() } onBlur={ () => this.minimizeValidate() } auto="new-password"/>
              </MediaQuery>
              <MediaQuery maxWidth={899}>
                <input type="password" name="password" placeholder="Password" id="password" onChange={ this.handleChange } onFocus={ () => this.showValidateMin() } onBlur={ () => this.minimizeValidateMin() } auto="new-password"/>
              </MediaQuery>
              <label htmlFor="password">Password</label>
            </div>
            <button type='submit' id="submit" onClick={ this.submitPassword }>Save</button>
          </div>
        </div>
        <MediaQuery minWidth={900}>
          <div className="validate-container" id="validate">
          <Validation 
              passlength={ this.state.password } 
              minlength={ this.state.minLength } 
              lowercase={ this.state.lowerCase } 
              uppercase={ this.state.upperCase } 
              digit={ this.state.hasNumber } 
              special={ this.state.specialCharacter } 
            />
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={900}>
          <div className="validate-container" id="validateMin">
            <Validation 
              passlength={ this.state.password } 
              minlength={ this.state.minLength } 
              lowercase={ this.state.lowerCase } 
              uppercase={ this.state.upperCase } 
              digit={ this.state.hasNumber } 
              special={ this.state.specialCharacter } 
            />
          </div>
        </MediaQuery>
      </div>
    )
  }
};

function mapDispatchToProps (dispatch) {
  return {
    addData: (payload) => dispatch(addPassword(payload))
  }
}

export default connect(null, mapDispatchToProps)(Form)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePassword } from '../store/password/password.actions'
import '../styles/UpdateModal.css'

class UpdateModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      urlUpdate: '',
      usernameUpdate: '',
      passwordUpdate: '',
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitUpdate = () => {
    let obj = {
      id: this.state.id,
      url: this.state.urlUpdate,
      username: this.state.usernameUpdate,
      password: this.state.passwordUpdate,
    }
    this.props.updateData(obj, this.props.auth.userId)
    this.props.closeUpdate(obj.id)
  }

  render() {
    let { closeUpdate, data } = this.props
    return (
      <div>
        <div className={'overlay' + data.id} id='overlay' onClick={ () => closeUpdate(data.id) }></div>
        <div className="update-container">
          <div autoComplete="off" className={'form-update' + data.id} id="form-update">
            <h1 id="message">Update Form</h1>
            <h1 style={{float: 'right', marginTop: '-1.5em', cursor: 'pointer'}} onClick={ () => closeUpdate(data.id) }>&times;</h1>
            <div className="field-update">
              <input type="url" name="urlUpdate" id={ 'url-update' + data.id } defaultValue={data.url} onChange={ this.handleChange } auto="off"/>
              <label htmlFor="urlUpdate">URL</label>
            </div>
            <div className="field-update">
              <input type="username" name="usernameUpdate" id={ 'username-update' + data.id } defaultValue={ data.username } onChange={ this.handleChange } auto="off" required/>
              <label htmlFor="usernameUpdate">Username</label>
            </div>
            <div className="field-update">
              <input type="password" name="passwordUpdate" id={ 'password-update' + data.id } defaultValue={ data.password } onChange={ this.handleChange } auto="new-password"/>
              <label htmlFor="passwordUpdate">Password</label>
            </div>
            <button type='submit' onClick={ this.submitUpdate }id="submit-update">Update</button>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.setState({
      id: this.props.data.id,
      urlUpdate: this.props.data.url,
      usernameUpdate: this.props.data.username,
      passwordUpdate: this.props.data.password,
    })
  }
 };

function mapStateToProps (state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateData: (payload, userId) => dispatch(updatePassword(payload, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateModal)

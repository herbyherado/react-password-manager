import React, { Component } from 'react';
import { loadPassword, addPassword, deletePassword } from '../store/password/password.actions'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import '../styles/List.css'
import ListTitle from './ListTitle'
import UpdateModal from '../components/UpdateModal'
import nyan from '../assets/nyan.gif'

class List extends Component {
  timestamp (time) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let date = new Date(time).getDate()
    let month = new Date(time).getMonth()
    let year = new Date(time).getFullYear()
    return (date < 10)? `0${date} ${months[month]} ${year}`: `${date} ${months[month]} ${year}`
  }
  remove (id) {
    this.props.deleteData(id)
  }
  hash (str) {
    let len = str.length
    let bullet = String.fromCharCode(0x2022)
    return bullet.repeat(len)
  }
  toggle (id, pass) {
    let bullet = String.fromCharCode(0x2022)
    let text = document.getElementById('pass'+id)
    if (text.innerText.indexOf(bullet) !== -1) {
      ReactDOM.render(pass, document.getElementById('pass'+id))
    } else {
      ReactDOM.render(this.hash(pass), document.getElementById('pass'+id))
    }
  }
  showUpdate (data) {
    document.getElementsByClassName('overlay' + data.id)[0].style.display = 'block'
    document.getElementsByClassName('form-update' + data.id)[0].style.display = 'block'
    // document.getElementById('url-update' + data.id).value = data.url
    // document.getElementById('username-update' + data.id).value = data.username
    // document.getElementById('password-update' + data.id).value = data.password
  }
  closeUpdate (id) {
    document.getElementsByClassName('overlay' + id)[0].style.display = 'none'
    document.getElementsByClassName('form-update' + id)[0].style.display = 'none'
  }
  render() {
    if (this.props.password.loading) {
      return (
        <div className="list-container">
          <ListTitle/>
          <div className="list-loading">
            <img src={nyan} alt="nyan cat" width="500px" height="auto"/>
            <h1>Please wait</h1>
          </div>
        </div>
      )
    } else if (!this.props.password.loading) {
      if (this.props.password.data.length !== 0) {
        let arr = this.props.password.data.filter(each => (each.url.indexOf(this.props.query.query) !== -1) && each.url )
        return (
          <div>
            <div className="list-container">
              <ListTitle/>
              <div className="list-desc">
              { (arr.length) ? arr.map(each => (
                <div key={each.id} >
                <UpdateModal closeUpdate={ (each) => this.closeUpdate(each) } data={each}/>
                  <div className="desc-row" >
                    <div className="title">{ each.url }</div>
                    <div className="title">{ each.username }</div>
                    <div id={'pass'+each.id} > { this.hash(each.password) } </div>
                    <div className="title">{ this.timestamp(each.createdAt) }</div>
                    { (each.updatedAt) ?
                      <div className="title">{ this.timestamp(each.updatedAt) }</div> :
                      <div className="title"></div>
                    }
                    <div className="icon" onClick={ () => this.toggle(each.id, each.password) }> <i className="fas fa-eye"></i> </div>         
                    <div className="icon" onClick={ () => this.showUpdate(each) } title={each.id}> <i className="far fa-edit"></i> </div>    
                    <div className="icon" onClick={ () => this.remove(each.id) }> <i className="fas fa-minus-circle"></i> </div>         
                  </div>
                </div>
                )) : (
                  <div><h2>No match found for '{this.props.query.query}'</h2></div>
                )
              } 
              </div>            
            </div>
          </div>      
        )
      } else {
        return (
          <div className="list-container">
            <ListTitle/>
            <div className="list-loading">
              <h1> No data to display </h1>
            </div>
          </div>
        )
      }
    } 
  }
  componentWillMount () {
    this.props.getPassword()
  }
};


function mapStateToProps (state) {
  return {
    password: state.password,
    query: state.query
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPassword: () => dispatch(loadPassword()),
    addData: (payload) => dispatch(addPassword(payload)),
    deleteData: (payload) => dispatch(deletePassword(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
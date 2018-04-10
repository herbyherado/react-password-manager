import { REGISTER, SIGN_IN, SIGN_OUT, CHECK_PASSWORD_SUCCESS, CHECK_PASSWORD_ERROR } from './auth.actionType'
// import firebase from 'firebase'
import { auth } from '../../firebase/firebase'
import swal from 'sweetalert2'
import ReactDOM from 'react-dom'

export const Register = (payload) => {
  return dispatch => {
    // swal.showLoading()
    swal({
      title: 'loading',
      onOpen: () => {
        swal.showLoading()
        auth.createUserWithEmailAndPassword(payload.email, payload.password)
          .then((user) => {
            console.log(user)
            dispatch(register({userId: user.uid, email: user.email }))
            swal.close()
            swal('Hooray!', 'new user created', 'success')
          })
          .catch(err => {
            swal.close()
            swal('oops!', err.message, 'error')
            console.log(err.message)
          })
        
      }
    })
  }
}

export const signIn = (payload) => {
  return dispatch => {
    swal({
      title: 'loading',
      onOpen: () => {
        swal.showLoading()
        auth.signInWithEmailAndPassword(payload.email, payload.password)
          .then(user => {
            console.log(user)
            dispatch(signInUser({userId: user.uid, email: user.email}))
            swal.close()
          })
          .catch(err => {
            swal.close()
            swal('oops!', err.message, 'error')
            console.log(err.message)
          })
      }
    })
  }
}

export const signOut = (payload) => {
  return dispatch => {
    auth.signOut()
      .then(() => {
        dispatch(signOutUser())
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const promptPassword = (password, email, element) => {
  return dispatch => {
    console.log(password, email, element)
    swal({
      title: 'Confirm password to show',
      type: 'warning',
      input: 'password',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
      preConfirm: (pass) => {
        return new Promise((resolve) => {
          swal({
            title: 'Loading!',
            onOpen: () => {
              swal.showLoading()
              console.log(pass, email)
              auth.signInWithEmailAndPassword(email, pass)
              .then(() => {
                swal.close()
                swal({
                  type: 'success'
                })
                ReactDOM.render(password, element)
              }).catch((error) => {
                console.log(error)
                swal.close()
                swal({
                  type: 'error'
                })
              })
            }
          })
        })
      },
      allowOutsideClick: () => !swal.isLoading()
    })
  }
}

const register = (payload) => {
  return {
    type: REGISTER,
    ...payload
  }
}

const signInUser = (payload) => {
  return {
    type: SIGN_IN,
    ...payload
  }
}
const checkPasswordSuccess = () => {
  return {
    type: CHECK_PASSWORD_SUCCESS
  }
}
const checkPasswordError = () => {
  return {
    type: CHECK_PASSWORD_ERROR
  }
}

const signOutUser = () => {
  return {
    type: SIGN_OUT
  }
}
import { REGISTER, SIGN_IN, SIGN_OUT } from './auth.actionType'
// import firebase from 'firebase'
import { auth } from '../../firebase/firebase'
import swal from 'sweetalert2'

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

const signOutUser = () => {
  return {
    type: SIGN_OUT
  }
}
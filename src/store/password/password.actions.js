import {
  LOAD_PASSWORD_SUCCESS,
  LOAD_PASSWORD_LOADING,
  LOAD_PASSWORD_ERROR,
  ADD_PASSWORD_SUCCESS,
  DELETE_PASSWORD,
  UPDATE_PASSWORD
} from './password.actionTypes'
import firebase from 'firebase'
import { database } from '../../firebase/firebase'

export const loadPassword = (payload) => {
  return dispatch => {
    dispatch(loadPasswordLoading())
    return database.ref(`/password/${payload}`).on('value', snap => {
      const pass = snap.val()
      console.log(pass)
      let arr = []
      for (const key in pass) {
        if (pass.hasOwnProperty(key)) {
          const el = pass[key]
          const update = {...el, id: key}
          arr.push(update)
        }
      }
      dispatch(loadPasswordSuccess(arr))
    }, err => {
      dispatch(loadPasswordError())
    })
  }
}

export const addPassword = (payload, id) => {
  console.log(payload)
  payload = {
    ...payload,
    createdAt: firebase.database.ServerValue.TIMESTAMP,
  }
  console.log(payload)
  console.log(id)
  return dispatch => {
    database.ref(`/password/${id}`).push(payload)
    .then(() => {
      dispatch(addPasswordSuccess(payload))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const updatePassword = (payload, userId) => {
  let id = payload.id
  payload = {
    url: payload.url,
    username: payload.username,
    password: payload.password,
    updatedAt: firebase.database.ServerValue.TIMESTAMP
  }
  return dispatch => {
    database.ref(`/password/${userId}/${id}`).update(payload)
    .then(() => {
      dispatch(updatePasswordSuccess(payload))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const deletePassword = (payload) => {
  return dispatch => {
    database.ref(`/password/${payload}`).remove()
      .then(() => {
        dispatch(deletePasswordSuccess())
      })
  }
}

const updatePasswordSuccess = () => ({
  type: UPDATE_PASSWORD
})

const deletePasswordSuccess = () => ({
  type: DELETE_PASSWORD
})
const loadPasswordSuccess = (payload) => ({
  type: LOAD_PASSWORD_SUCCESS,
  data: payload
})
const loadPasswordLoading = () => ({
  type: LOAD_PASSWORD_LOADING
})
const loadPasswordError = () => ({
  type: LOAD_PASSWORD_ERROR
})

const addPasswordSuccess = () => ({
  type: ADD_PASSWORD_SUCCESS
})
import {
  LOAD_PASSWORD_SUCCESS,
  LOAD_PASSWORD_LOADING,
  LOAD_PASSWORD_ERROR,
  ADD_PASSWORD_SUCCESS,
  DELETE_PASSWORD,
  UPDATE_PASSWORD
} from './password.actionTypes'

const initialState = {
  loading: false,
  error: false,
  data: [],
}

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_PASSWORD_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      }
    case LOAD_PASSWORD_LOADING:
      return {
        ...state,
        loading: true
      }
    case LOAD_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    case ADD_PASSWORD_SUCCESS:
      return {
        ...state
      }
    case DELETE_PASSWORD:
      return {
        ...state
      }
    case UPDATE_PASSWORD:
      return {
        ...state
      }
    default:
      return state
  }
}

export default reducers
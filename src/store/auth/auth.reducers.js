import { REGISTER, SIGN_IN, SIGN_OUT, CHECK_PASSWORD_SUCCESS, CHECK_PASSWORD_ERROR } from './auth.actionType'

const initialState = {
  email: '',
  userId: '',
  isLogin: false
}

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER:
      return {
        email: action.email,
        userId: action.userId,
        isLogin: true
      }
    case SIGN_IN:
      return {
        email: action.email,
        userId: action.userId,
        isLogin: true
      }
    case SIGN_OUT:
      return {
        email: '',
        userId: '',
        isLogin: false
      }
    case CHECK_PASSWORD_SUCCESS:
      return {
        ...state
      }
    case CHECK_PASSWORD_ERROR:
      return {
        ...state
      }
    default:
      return state
  }
}

export default reducers
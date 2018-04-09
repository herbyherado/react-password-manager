import { REGISTER, SIGN_IN, SIGN_OUT } from './auth.actionType'

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
    default:
      return state
  }
}

export default reducers
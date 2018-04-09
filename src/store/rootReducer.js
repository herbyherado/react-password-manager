import { combineReducers } from 'redux'
import Password from './password/password.reducers'
import Query from './search/search.reducer'
import Auth from './auth/auth.reducers'

const reducers = combineReducers({
  password: Password,
  query: Query,
  auth: Auth
})

export default reducers
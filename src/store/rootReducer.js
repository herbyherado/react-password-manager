import { combineReducers } from 'redux'
import Password from './password/password.reducers'
import Query from './search/search.reducer'

const reducers = combineReducers({
  password: Password,
  query: Query
})

export default reducers
import { UPDATE_QUERY } from './search.actionTypes'

const initialState = {
  query: ''
}

const reducers = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_QUERY:
      return {
        query: action.query
      }
    default:
      return state
  }
}

export default reducers
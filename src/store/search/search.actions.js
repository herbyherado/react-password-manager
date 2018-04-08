import { UPDATE_QUERY } from './search.actionTypes'

export const updateQuery = (payload) => {
  return dispatch => {
    dispatch(updateQuerySuccess(payload))
  }
}

const updateQuerySuccess = (payload) => ({
  type: UPDATE_QUERY,
  query: payload
})
